import { ReactElement } from "react";

interface Props {
  children: string;
  customStyle?: string | undefined;
  onClick?: any;
  isDisabled?: boolean;
}

export default function Button({
  children,
  customStyle,
  onClick,
  isDisabled,
}: Props): ReactElement {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`bg-lightGreen rounded-full w-24 h-10 hover:bg-lightGreen-opaque ${customStyle}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: "Button",
  customStyle: "",
};
