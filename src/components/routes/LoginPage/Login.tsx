import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import Button from "../../shared/Button";
import CustomInput from "../../shared/Input";
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
    mode: "onBlur",
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex container mx-auto justify-center">
      <form
        className="grid grid-cols-2 w-4/5 gap-2 gap-y-7"
        onSubmit={onSubmit}
      >
        <CustomInput
          label={null}
          type="email"
          placeholder="Email"
          customStyle="col-span-2 h-10"
          {...register("email")}
        />
        {errors?.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <CustomInput
          label={null}
          type="password"
          placeholder="Password"
          customStyle="col-span-2 h-10"
          {...register("password")}
        />
        {errors?.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <Button customStyle="">Sign In</Button>
      </form>
    </div>
  );
}
