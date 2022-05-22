import TailwindCustomInput from "../../../shared/TailwindCustomInput";
import { buttonStyle } from "../../../utils/constants";

export default function Contact() {
  return (
    <div>
      <div className="bg-chakikaDarkGreen h-24 flex justify-center items-center text-center font-bold text-chakikaGrey">
        Can't Find What You're Looking For? <br /> Send Us Your Custom Order
      </div>
      <div className="container mx-auto max-w-3xl mt-6">
        <div className="flex gap-4 mb-4">
          <TailwindCustomInput
            type="text"
            name="name"
            placeholder=" "
            required
            label="Name"
          />
          <TailwindCustomInput
            type="email"
            name="email"
            placeholder=" "
            required
            label="Email"
          />
        </div>
        <TailwindCustomInput
          type="text"
          name="subject"
          placeholder=" "
          required
          label="Subject"
        />
        <div className="relative z-0 w-full border rounded mb-4">
          <textarea name="name" placeholder=" " required className={" h-48"} />
          <label htmlFor="message" className={""}>
            Message
          </label>
        </div>
        <button className={buttonStyle}>Send</button>
      </div>
    </div>
  );
}
