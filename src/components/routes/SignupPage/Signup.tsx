import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../../shared/CustomButton";
import CustomInput from "../../shared/CustomInput";
import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    fname: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .min(2)
      .max(40),
    lname: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .min(2)
      .max(40),
    email: yup.string().email("Invalid email").required("*"),
    password: yup.string().min(6).required("*"),
    repeatpassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match"),
    phone: yup.string().min(10),
  })
  .required();

interface Credential {
  fname: string;
  lname: string;
  email: string;
  password: string;
  repeatpassword: string;
  phone: string;
}
export default function Signup(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credential>({
    resolver: useYupValidationResolver(schema),
    reValidateMode: "onBlur",
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
          type="text"
          placeholder="First Name"
          customStyle="col-span-1 h-10"
          {...register("fname")}
        >
          {errors?.fname && (
            <p className="text-red-500 text-sm">{errors.fname.message}</p>
          )}
        </CustomInput>

        <CustomInput
          label={null}
          type="text"
          placeholder="Last Name"
          customStyle="col-span-1 h-10"
          {...register("lname")}
        >
          {errors?.lname && (
            <p className="text-red-500 text-sm">{errors.lname.message}</p>
          )}{" "}
        </CustomInput>

        <CustomInput
          label={null}
          type="email"
          placeholder="Email"
          customStyle="col-span-2 h-10"
          {...register("email")}
        >
          {errors?.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </CustomInput>

        <CustomInput
          label={null}
          type="password"
          placeholder="Passowrd"
          customStyle="col-span-2 h-10"
          {...register("password")}
        >
          {errors?.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </CustomInput>

        <CustomInput
          label={null}
          type="password"
          placeholder="Repeat Password"
          customStyle="col-span-2 h-10"
          {...register("repeatpassword")}
        >
          {errors?.repeatpassword && (
            <p className="text-red-500 text-sm">
              {errors.repeatpassword.message}
            </p>
          )}
        </CustomInput>

        <CustomInput
          label={null}
          type="text"
          placeholder="Phone Number"
          customStyle="col-span-2 h-10"
          {...register("phone")}
        >
          {errors?.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </CustomInput>

        <CustomButton customStyle="">Sign Up</CustomButton>
      </form>
    </div>
  );
}
