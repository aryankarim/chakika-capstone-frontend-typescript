import { TextField } from "@mui/material";
import { buttonStyle } from "../../../utils/constants";

export default function Contact() {
  return (
    <div>
      <div className="bg-chakikaDarkGreen h-24 flex justify-center items-center text-center font-bold text-chakikaGrey">
        Can't Find What You're Looking For? <br /> Send Us Your Custom Order
      </div>
      <div className="container mx-auto max-w-3xl mt-6">
        <div className="flex gap-4 mb-4">
          <TextField id="name" label="Name" variant="outlined" fullWidth />
          <TextField id="phone" label="Phone" variant="outlined" fullWidth />
        </div>
        <div className="mb-4">
          <TextField
            id="subject"
            label="Subject"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="mb-4">
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            fullWidth
          />
        </div>
        <button className={buttonStyle}>Send</button>
      </div>
    </div>
  );
}
