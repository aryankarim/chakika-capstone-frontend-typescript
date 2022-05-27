import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";
import { loginValidationSchema } from "../../../utils/validatorSchemas";
import { Button } from "@mui/material";
import Input from "../../shared/MUI/Input";

interface Credential {
  email: string;
  password: string;
}

export default function LoginPage(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credential>({
    resolver: useYupValidationResolver(loginValidationSchema),
    mode: "onBlur",
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex container mx-auto justify-center">
      <form className="flex flex-col gap-y-4 w-4/5 " onSubmit={onSubmit}>
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
        <Button
          variant="contained"
          color="secondary"
          sx={{ height: 50 }}
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}
