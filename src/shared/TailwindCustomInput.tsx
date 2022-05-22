import { ReactElement } from "react";

interface propTypes {
  type: string;
  name: string;
  label: string | null;
  placeholder: string;
  required: boolean;
  inputStyle: string;
  labelStyle: string;
  value: string;
  setValue: (arg: { target: Element }) => void | (() => void);
  icon: ReactElement;
  setPasswordVisibility: () => void;
}

export default function TailwindCustomInput({
  type,
  name,
  label,
  placeholder,
  required,
  inputStyle,
  labelStyle,
  value,
  setValue,
  icon,
  setPasswordVisibility,
}: propTypes) {
  return (
    <div className="relative z-0 w-full border flex rounded">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className={inputStyle}
        onChange={setValue}
        value={value}
      />
      {label && (
        <label htmlFor={name} className={labelStyle}>
          {label}
        </label>
      )}
      {icon && (
        <div
          onClick={setPasswordVisibility}
          className="flex items-center px-4 cursor-pointer"
        >
          {icon}
        </div>
      )}
    </div>
  );
}

TailwindCustomInput.defaultProps = {
  type: "text",
  name: "",
  label: null,
  placeholder: "",
  required: false,
  inputStyle:
    "input pt-6 pb-1 px-3 block w-full text-xs mt-0 bg-transparent border appearance-none border-chakikaDarkGreen",
  labelStyle: "label px-2 absolute duration-300 top-3 -z-1 dark:text-gray-700 ",
  value: "",
  setValue: () => {},
  icon: null,
  setPasswordVisibility: () => {},
};
