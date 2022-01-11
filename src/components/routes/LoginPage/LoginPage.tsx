import { ReactElement } from "react";
import CustomButton from "../../shared/CustomButton";
import CustomInput from "../../shared/CustomInput";

interface Props {}

export default function LoginPage({}: Props): ReactElement {
  return (
    <div className="container mx-auto">
      <form className="flex flex-col">
        <CustomInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <CustomInput
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <CustomButton customStyle="">Sign In</CustomButton>
      </form>
    </div>
  );
}
