import { ReactElement, useState } from "react";
import Button from "../../shared/Button";
import Login from "../LoginPage/Login";
import Signup from "../SignupPage/Signup";

export default function Entry(): ReactElement {
  const [toggleLogin, setToggleLogin] = useState(true);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 divide-x">
      <div className="h-screen bg-chakikaLightGreen hidden md:block">
        <img
          src="/images/logo-fliped.png"
          alt="logo"
          className="absolute bottom-0 left-0 h-80 w-80"
        />
      </div>
      <div className="h-screen bg-chakikaDarkGreen">
        <div className="flex flex-row-reverse container mx-auto justify-right items-center w-4/5 h-32">
          <Button
            customStyle={`rounded-l-none ${
              toggleLogin &&
              "bg-chakikaDarkGreen hover:bg-chakikaDarkGreen text-chakikaLightGreen"
            }`}
            onClick={() => {
              setToggleLogin((prev) => !prev);
            }}
            isDisabled={toggleLogin}
          >
            Sign In
          </Button>
          <Button
            customStyle={`rounded-r-none ${
              !toggleLogin &&
              "bg-chakikaDarkGreen hover:bg-chakikaDarkGreen text-chakikaLightGreen"
            }`}
            onClick={() => {
              setToggleLogin((prev) => !prev);
            }}
            isDisabled={!toggleLogin}
          >
            Sign Up
          </Button>
        </div>

        {toggleLogin ? <Login /> : <Signup />}
      </div>
    </div>
  );
}
