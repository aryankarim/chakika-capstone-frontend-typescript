import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  type: string;
  errors: any;
  register: UseFormRegister<any>;
}

export default function Input({ id, label, type, errors, register }: Props) {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      color="secondary"
      variant="outlined"
      fullWidth
      error={errors?.[id] ? true : false}
      helperText={errors?.[id] ? errors?.[id].message : null}
      sx={{
        "& .MuiInputLabel-root": { color: "secondary.main" },
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "secondary.main" },
          input: { color: "secondary.main" },
        },
      }}
      autoComplete="off"
      {...register(id)}
    />
  );
}
