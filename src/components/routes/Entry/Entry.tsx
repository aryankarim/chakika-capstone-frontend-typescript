import { Button } from "@mui/material";
import { ReactElement, useState } from "react";
import Login from "../LoginPage/Login";
import SignUp from "../SignUpPage/SignUp";

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
            {...(!toggleLogin && { color: "secondary" })}
            variant="contained"
            sx={{
              borderRadius: "0 28px 28px 0",
              boxShadow: 0,
            }}
            onClick={() => {
              setToggleLogin((prev) => !prev);
            }}
            disabled={toggleLogin}
          >
            Sign In
          </Button>
          <Button
            {...(toggleLogin && {
              color: "secondary",
            })}
            variant="contained"
            sx={{
              borderRadius: "28px 0 0 28px",
              boxShadow: 0,
            }}
            onClick={() => {
              setToggleLogin((prev) => !prev);
            }}
            disabled={!toggleLogin}
          >
            Sign Up
          </Button>
        </div>

        {toggleLogin ? <Login /> : <SignUp />}
      </div>
    </div>
  );
}
