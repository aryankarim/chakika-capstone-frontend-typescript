import { Button, InputBaseComponentProps, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { contactValidationSchema } from "../../../utils/validatorSchemas";
import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";

interface Inputs {
  name: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const resolver = useYupValidationResolver(contactValidationSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<Inputs>({ resolver, mode: "onBlur" });
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
