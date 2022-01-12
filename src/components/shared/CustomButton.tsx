import { ReactElement } from "react";

interface Props {
  children: string;
  customStyle: string | undefined;
}

export default function CustomButton({
  children,
  customStyle,
}: Props): ReactElement {
  return (
    <button
      className={`bg-lightGreen rounded-full font-montserrat w-20 h-10 ${
        customStyle && true
      }`}
    >
      {children}
    </button>
  );
}
