import { Children, forwardRef, ReactElement } from "react";

interface Props {
  label: string | null;
  name: string;
  type: string;
  placeholder: string;
  rest?: any;
  customStyle?: string | undefined;
  children?: any;
}

export default forwardRef(function CustomInput(
  { label, name, type, placeholder, customStyle, children, ...rest }: Props,
  ref: any
): ReactElement {
  return (
    <div className={customStyle}>
      {label && (
        <label
          htmlFor={name}
          className="block text-lightGreen font-montserrat uppercase"
        >
          {label}
        </label>
      )}
      <input
        className={`border-b border-lightGreen placeholder-lightGreen text-lightGreen font-montserrat bg-transparent w-full outline-0`}
        type={type}
        placeholder={placeholder}
        name={name}
        ref={ref}
        autoComplete={"off"}
        {...rest}
      />
      <div>{children}</div>
    </div>
  );
});
