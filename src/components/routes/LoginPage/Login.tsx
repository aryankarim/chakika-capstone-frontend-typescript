import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";
import { loginValidationSchema } from "../../../utils/validatorSchemas";
import { Button, TextField } from "@mui/material";

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
          type="password"
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
        <Button variant="contained" color="secondary" sx={{ height: 50 }}>
          Sign In
        </Button>
      </form>
    </div>
  );
}
