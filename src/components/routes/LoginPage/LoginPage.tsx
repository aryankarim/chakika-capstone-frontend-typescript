import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../../shared/CustomButton";
import CustomInput from "../../shared/CustomInput";
import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    email: yup.string().email("Email not found").required("*"),
    password: yup.string().required("*"),
  })
  .required();

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
    resolver: useYupValidationResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="container mx-auto">
      <form className="flex flex-col" onSubmit={onSubmit}>
        <CustomInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        {errors?.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <CustomInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />
        {errors?.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <CustomButton customStyle="">Sign In</CustomButton>
      </form>
    </div>
  );
}
