import { ReactElement } from "react";
import LoginPage from "../LoginPage/LoginPage";

interface Props {}

export default function Entry({}: Props): ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 divide-x">
      <div className="h-screen bg-lightGreen hidden md:block">
        <img
          src="/images/logo-fliped.png"
          alt="logo"
          className="absolute bottom-0 left-0 h-80 w-80"
        />
      </div>
      <div className="flex h-screen bg-darkGreen justify-items-center">
        <LoginPage />
      </div>
    </div>
  );
}
