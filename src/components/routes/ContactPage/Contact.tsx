import { buttonStyle, inputStyle, labelStyle } from "../../../utils/constants";

export default function Contact() {
  return (
    <div>
      <div className="bg-chakikaDarkGreen h-24 flex justify-center items-center text-center font-bold text-chakikaGrey">
        Can't Find What You're Looking For? <br /> Send Us Your Custom Order
      </div>
      <div className="container mx-auto max-w-3xl mt-6">
        <div className="flex gap-4 mb-4">
          <div className="relative z-0 w-full border rounded">
            <input
              type="text"
              name="name"
              placeholder=" "
              required
              className={inputStyle}
            />
            <label htmlFor="name" className={labelStyle}>
              Name
            </label>
          </div>
          <div className="relative z-0 w-full border rounded">
            <input
              type="text"
              name="phone"
              placeholder=" "
              required
              className={inputStyle}
            />
            <label htmlFor="phone" className={labelStyle}>
              Phone Number
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full border rounded mb-4">
          <input
            type="text"
            name="subject"
            placeholder=" "
            required
            className={inputStyle}
          />
          <label htmlFor="subject" className={labelStyle}>
            Subject
          </label>
        </div>
        <div className="relative z-0 w-full border rounded mb-4">
          <textarea
            name="name"
            placeholder=" "
            required
            className={inputStyle + " h-48"}
          />
          <label htmlFor="message" className={labelStyle}>
            Message
          </label>
        </div>
        <button className={buttonStyle}>Send</button>
      </div>
    </div>
  );
}
