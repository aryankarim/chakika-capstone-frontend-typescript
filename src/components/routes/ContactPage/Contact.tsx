import { Button, InputBaseComponentProps, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Too Short!")
    .max(60, "Too Long! Please consider applying for Guinness WR!")
    .required("*"),
  phone: yup
    .string()
    .min(10, "Invalid Phone Number!")
    .max(15, "Too Long! We can't contact numbers from outside Earth!")
    .required("*"),
  subject: yup
    .string()
    .min(6, "Too Short!")
    .max(100, "Too Long!")
    .required("*"),
  message: yup
    .string()
    .min(20, `Too Short! At least include the website link!`)
    .max(600, "Too Long! You should consider writing a book!")
    .required("*"),
});

interface Inputs {
  name: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<InputBaseComponentProps>({ resolver, mode: "onBlur" });
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  return (
    <div>
      <div className="bg-chakikaDarkGreen h-24 flex justify-center items-center text-center font-bold text-chakikaGrey">
        Can't Find What You're Looking For? <br /> Send Us Your Custom Order
      </div>
      <div className="container mx-auto max-w-3xl mt-6">
        <div className="flex gap-4 mb-4">
          <TextField
            {...register("name")}
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            error={errors?.name ? true : false}
            helperText={errors?.name ? errors.name.message : null}
          />
          <TextField
            {...register("phone")}
            id="phone"
            label="Phone"
            variant="outlined"
            fullWidth
            error={errors?.phone ? true : false}
            helperText={errors?.phone ? errors.phone.message : null}
          />
        </div>
        <div className="mb-4">
          <TextField
            {...register("subject")}
            id="subject"
            label="Subject"
            variant="outlined"
            fullWidth
            error={errors?.subject ? true : false}
            helperText={errors?.subject ? errors.subject.message : null}
          />
        </div>
        <div className="mb-4">
          <TextField
            {...register("message")}
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            fullWidth
            error={errors?.message ? true : false}
            helperText={errors?.message ? errors.message.message : null}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ height: 50 }}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
