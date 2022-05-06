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
      className={`bg-chakikaLightGreen rounded-full w-24 h-10 hover:bg-chakikaLightGreen-opaque ${customStyle}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: "Button",
  customStyle: "",
};
