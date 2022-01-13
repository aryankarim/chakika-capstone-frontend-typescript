import { forwardRef, ReactElement } from "react";

interface Props {
  label: string | null;
  name: string;
  type: string;
  placeholder: string;
  rest?: any;
}

export default forwardRef(function CustomInput(
  { label, name, type, placeholder, ...rest }: Props,
  ref: any
): ReactElement {
  return (
    <div className="flex flex-col justify-items-center my-8">
      {label && (
        <label
          htmlFor={name}
          className="block text-lightGreen font-montserrat uppercase"
        >
          {label}
        </label>
      )}
      <input
        className="border-b border-lightGreen placeholder-gray-900 text-lightGreen font-montserrat bg-transparent outline-0"
        type={type}
        placeholder={placeholder}
        name={name}
        ref={ref}
        font-montserrat
        {...rest}
      />
    </div>
  );
});
