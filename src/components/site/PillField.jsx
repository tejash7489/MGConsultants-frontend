import { Mail, Phone, User } from "lucide-react";

const ICONS = { user: User, phone: Phone, mail: Mail };

export const PillField = ({ icon, label, testid, type = "text", value, onChange, required }) => {
  const Icon = ICONS[icon];
  return (
    <label className="pill-field group">
      {Icon && <Icon size={18} className="shrink-0 text-[var(--gold)]" />}
      <span className="relative flex-1">
        <input
          data-testid={testid}
          placeholder=" "
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className="peer w-full bg-transparent text-sm text-[var(--ivory)] outline-none md:text-base"
        />
        <span className="pill-label">{label}</span>
      </span>
    </label>
  );
};
