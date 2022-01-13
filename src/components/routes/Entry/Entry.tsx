import { ReactElement, useState } from "react";
import Button from "../../shared/Button";
import Login from "../LoginPage/Login";
import Signup from "../SignupPage/Signup";

export default function Entry(): ReactElement {
  const [toggleLogin, setToggleLogin] = useState(true);
  console.log(toggleLogin);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 divide-x">
      <div className="h-screen bg-lightGreen hidden md:block">
        <img
          src="/images/logo-fliped.png"
          alt="logo"
          className="absolute bottom-0 left-0 h-80 w-80"
        />
      </div>
      <div className="h-screen bg-darkGreen">
        <div className="flex flex-row-reverse p-4">
          <Button
            customStyle={`rounded-l-none ${
              !toggleLogin && "bg-darkGreen hover:bg-darkGreen text-lightGreen"
            }`}
            onClick={() => {
              setToggleLogin((prev) => !prev);
            }}
            isDisabled={!toggleLogin}
          >
            Sign Up
          </Button>
          <Button
            customStyle={`rounded-r-none ${
              toggleLogin && "bg-darkGreen hover:bg-darkGreen text-lightGreen"
            }`}
            onClick={() => {
              setToggleLogin((prev) => !prev);
            }}
            isDisabled={toggleLogin}
          >
            Sign In
          </Button>
        </div>

        {toggleLogin ? <Login /> : <Signup />}
      </div>
    </div>
  );
}
