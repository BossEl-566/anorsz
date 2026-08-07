type ContentFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;

  placeholder?: string;

  description?: string;

  multiline?: boolean;
};

export default function ContentField({
  label,
  value,
  onChange,
  placeholder,
  description,
  multiline = false,
}: ContentFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#211024]">
        {label}
      </label>

      {description && (
        <p className="mt-1 text-xs leading-5 text-black/40">
          {description}
        </p>
      )}

      {multiline ? (
        <textarea
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          placeholder={placeholder}
          rows={5}
          className="mt-2 w-full resize-y rounded-xl border border-black/10 bg-[#f8f7f5] px-4 py-3 text-sm leading-6 text-[#211024] outline-none transition placeholder:text-black/25 focus:border-[#681761] focus:bg-white focus:ring-4 focus:ring-[#681761]/10"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          placeholder={placeholder}
          className="mt-2 h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f5] px-4 text-sm text-[#211024] outline-none transition placeholder:text-black/25 focus:border-[#681761] focus:bg-white focus:ring-4 focus:ring-[#681761]/10"
        />
      )}
    </div>
  );
}