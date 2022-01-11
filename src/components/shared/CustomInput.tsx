import { ReactElement } from "react";

interface Props {
  label: string | null;
  name: string;
  type: string;
  placeholder: string;
}

export default function CustomInput({
  label,
  name,
  type,
  placeholder,
}: Props): ReactElement {
  return (
    <div className="my-4">
      {label && (
        <label htmlFor={name} className="block font-montserrat uppercase">
          {label}
        </label>
      )}
      <input
        className="border-b-2 placeholder-gray-400"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}
