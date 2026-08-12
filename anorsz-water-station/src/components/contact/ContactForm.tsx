"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  Mail,
} from "lucide-react";

export default function ContactForm() {
  const [isPreparing, setIsPreparing] = useState(false);
  const [emailOpened, setEmailOpened] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsPreparing(true);
    setEmailOpened(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const fullName = String(formData.get("fullName") ?? "");
    const organisation = String(formData.get("organisation") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const institutionType = String(formData.get("institutionType") ?? "");
    const solution = String(formData.get("solution") ?? "");
    const preferredContact = String(formData.get("preferredContact") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(
      `Website enquiry from ${fullName || organisation}`,
    );

    const body = encodeURIComponent(
      [
        "ANORS.Z GLOBAL WATER STATION ENQUIRY",
        "",
        `Full name: ${fullName}`,
        `Organisation: ${organisation || "Not provided"}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Institution type: ${institutionType}`,
        `Solution required: ${solution}`,
        `Preferred contact method: ${preferredContact}`,
        "",
        "Project information:",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:info@anorsz.com?subject=${subject}&body=${body}`;

    setIsPreparing(false);
    setEmailOpened(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-[#211a22]"
          >
            Full name <span className="text-[#681761]">*</span>
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter your full name"
            className="h-13 w-full border border-black/15 bg-white px-4 text-sm text-[#171319] outline-none transition placeholder:text-black/35 focus:border-[#681761] focus:ring-2 focus:ring-[#681761]/10"
          />
        </div>

        <div>
          <label
            htmlFor="organisation"
            className="mb-2 block text-sm font-medium text-[#211a22]"
          >
            Organisation
          </label>

          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            placeholder="School, company or institution"
            className="h-13 w-full border border-black/15 bg-white px-4 text-sm text-[#171319] outline-none transition placeholder:text-black/35 focus:border-[#681761] focus:ring-2 focus:ring-[#681761]/10"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-[#211a22]"
          >
            Email address <span className="text-[#681761]">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="name@example.com"
            className="h-13 w-full border border-black/15 bg-white px-4 text-sm text-[#171319] outline-none transition placeholder:text-black/35 focus:border-[#681761] focus:ring-2 focus:ring-[#681761]/10"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-[#211a22]"
          >
            Phone number <span className="text-[#681761]">*</span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+233..."
            className="h-13 w-full border border-black/15 bg-white px-4 text-sm text-[#171319] outline-none transition placeholder:text-black/35 focus:border-[#681761] focus:ring-2 focus:ring-[#681761]/10"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="institutionType"
            className="mb-2 block text-sm font-medium text-[#211a22]"
          >
            Institution type <span className="text-[#681761]">*</span>
          </label>

          <select
            id="institutionType"
            name="institutionType"
            required
            defaultValue=""
            className="h-13 w-full border border-black/15 bg-white px-4 text-sm text-[#171319] outline-none transition focus:border-[#681761] focus:ring-2 focus:ring-[#681761]/10"
          >
            <option value="" disabled>
              Select institution type
            </option>
            <option value="School">School</option>
            <option value="University or College">
              University or College
            </option>
            <option value="Company or Office">Company or Office</option>
            <option value="Factory">Factory</option>
            <option value="Hospital or Clinic">Hospital or Clinic</option>
            <option value="Hotel">Hotel</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Government Institution">
              Government Institution
            </option>
            <option value="Community">Community</option>
            <option value="Home">Home</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="solution"
            className="mb-2 block text-sm font-medium text-[#211a22]"
          >
            Solution required <span className="text-[#681761]">*</span>
          </label>

          <select
            id="solution"
            name="solution"
            required
            defaultValue=""
            className="h-13 w-full border border-black/15 bg-white px-4 text-sm text-[#171319] outline-none transition focus:border-[#681761] focus:ring-2 focus:ring-[#681761]/10"
          >
            <option value="" disabled>
              Select a water solution
            </option>
            <option value="Smart Water Station">Smart Water Station</option>
            <option value="Campus Water Station">Campus Water Station</option>
            <option value="Community Water Station">
              Community Water Station
            </option>
            <option value="Commercial Purification System">
              Commercial Purification System
            </option>
            <option value="Groundwater Treatment">
              Groundwater Treatment
            </option>
            <option value="Technical Support">Technical Support</option>
            <option value="General Consultation">General Consultation</option>
          </select>
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-medium text-[#211a22]">
          Preferred contact method
        </legend>

        <div className="flex flex-wrap gap-3">
          {["Phone call", "Email", "WhatsApp"].map((method) => (
            <label
              key={method}
              className="flex cursor-pointer items-center gap-2 border border-black/12 bg-white px-4 py-3 text-sm text-black/65 transition hover:border-[#681761]/40"
            >
              <input
                type="radio"
                name="preferredContact"
                value={method}
                required
                className="h-4 w-4 accent-[#681761]"
              />

              <span>{method}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-[#211a22]"
        >
          Tell us about your requirements{" "}
          <span className="text-[#681761]">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={7}
          placeholder="Tell us about the location, expected number of users, water source, preferred station or any other project requirements."
          className="w-full resize-y border border-black/15 bg-white px-4 py-4 text-sm leading-6 text-[#171319] outline-none transition placeholder:text-black/35 focus:border-[#681761] focus:ring-2 focus:ring-[#681761]/10"
        />
      </div>

      <div className="flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-black/45">
          By submitting this enquiry, you agree that our team may contact you
          using the details provided.
        </p>

        <button
          type="submit"
          disabled={isPreparing}
          className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full bg-[#681761] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#52124d] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPreparing ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Preparing
            </>
          ) : (
            <>
              Send Enquiry
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>

      {emailOpened && (
        <div
          role="status"
          className="flex items-start gap-3 border border-[#159447]/20 bg-[#159447]/7 p-4 text-sm text-[#155c30]"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

          <div>
            <p className="font-medium">Your email application has opened.</p>

            <p className="mt-1 text-xs leading-5 text-[#155c30]/75">
              Review the prepared enquiry and send it to complete the process.
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 text-xs text-black/40">
        <Mail className="h-4 w-4" />
        Enquiries are currently prepared for email submission.
      </div>
    </form>
  );
}