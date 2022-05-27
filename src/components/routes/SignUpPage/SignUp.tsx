import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";
import { signUpValidationSchema } from "../../../utils/validatorSchemas";
import { Button, TextField } from "@mui/material";

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
          <TextField
            {...register("fname")}
            id="fname"
            label="First Name"
            color="secondary"
            variant="outlined"
            fullWidth
            error={errors?.fname ? true : false}
            helperText={errors?.fname ? errors.fname.message : null}
            sx={{
              "& .MuiInputLabel-root": { color: "secondary.main" },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "secondary.main" },
              },
            }}
            autoComplete="off"
          />
          <TextField
            {...register("lname")}
            id="lname"
            label="Last Name"
            color="secondary"
            variant="outlined"
            fullWidth
            error={errors?.lname ? true : false}
            helperText={errors?.lname ? errors.lname.message : null}
            sx={{
              "& .MuiInputLabel-root": { color: "secondary.main" },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "secondary.main" },
              },
            }}
            autoComplete="off"
          />
        </div>
        <TextField
          {...register("email")}
          id="email"
          label="Email"
          color="secondary"
          variant="outlined"
          fullWidth
          error={errors?.email ? true : false}
          helperText={errors?.email ? errors.email.message : null}
          sx={{
            "& .MuiInputLabel-root": { color: "secondary.main" },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "secondary.main" },
            },
          }}
          autoComplete="off"
        />
        <TextField
          {...register("password")}
          id="password"
          label="Password"
          color="secondary"
          variant="outlined"
          fullWidth
          error={errors?.password ? true : false}
          helperText={errors?.password ? errors.password.message : null}
          sx={{
            "& .MuiInputLabel-root": { color: "secondary.main" },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "secondary.main" },
            },
          }}
          autoComplete="off"
        />
        <TextField
          {...register("repeatpassword")}
          id="repeatPassword"
          label="Repeat Password"
          color="secondary"
          variant="outlined"
          fullWidth
          error={errors?.repeatpassword ? true : false}
          helperText={
            errors?.repeatpassword ? errors.repeatpassword.message : null
          }
          sx={{
            "& .MuiInputLabel-root": { color: "secondary.main" },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "secondary.main" },
            },
          }}
          autoComplete="off"
        />
        <TextField
          {...register("phone")}
          id="phone"
          label="Phone"
          color="secondary"
          variant="outlined"
          fullWidth
          error={errors?.phone ? true : false}
          helperText={errors?.phone ? errors.phone.message : null}
          sx={{
            "& .MuiInputLabel-root": { color: "secondary.main" },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "secondary.main" },
            },
          }}
          autoComplete="off"
        />
        <Button variant="contained" color="secondary" sx={{ height: 50 }}>
          Sign Up
        </Button>
      </form>
    </div>
  );
}
