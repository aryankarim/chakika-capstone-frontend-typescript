import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";
import { signUpValidationSchema } from "../../../utils/validatorSchemas";
import { Button } from "@mui/material";
import Input from "../../shared/MUI/Input";

interface Credential {
  fname: string;
  lname: string;
  email: string;
  password: string;
  repeatpassword: string;
  phone: string;
}
export default function SignUp(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credential>({
    resolver: useYupValidationResolver(signUpValidationSchema),
    mode: "onBlur",
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex container mx-auto justify-center">
      <form className="flex flex-col w-4/5 gap-2 gap-y-4" onSubmit={onSubmit}>
        <div className="flex gap-x-4">
          <Input
            id="fname"
            label="First Name"
            type="text"
            errors={errors}
            register={register}
          />
          <Input
            id="lname"
            label="Last Name"
            type="text"
            errors={errors}
            register={register}
          />
        </div>
        <Input
          id="email"
          label="Email"
          type="email"
          errors={errors}
          register={register}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          errors={errors}
          register={register}
        />
        <Input
          id="repeatpassword"
          label="Repeat Password"
          type="password"
          errors={errors}
          register={register}
        />
        <Input
          id="phone"
          label="Phone"
          type="text"
          errors={errors}
          register={register}
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{ height: 50 }}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
