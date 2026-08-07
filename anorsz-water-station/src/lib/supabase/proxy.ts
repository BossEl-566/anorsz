import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          response = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  /*
   * Verify the authenticated user's token.
   */
  const { data } = await supabase.auth.getClaims();

  const claims = data?.claims;

  const pathname = request.nextUrl.pathname;

  const isLoginPage = pathname === "/admin/login";
  const isAdminRoute = pathname.startsWith("/admin");

  // Not authenticated and trying to access admin area
  if (!claims && isAdminRoute && !isLoginPage) {
    const url = request.nextUrl.clone();

    url.pathname = "/admin/login";

    return NextResponse.redirect(url);
  }

  // Already authenticated and trying to access login page
  if (claims && isLoginPage) {
    const url = request.nextUrl.clone();

    url.pathname = "/admin";

    return NextResponse.redirect(url);
  }

  return response;
}