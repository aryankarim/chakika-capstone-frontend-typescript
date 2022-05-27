import * as yup from "yup";

// CONTACT US PAGE
export const contactValidationSchema = yup.object({
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

// LOGIN PAGE
export const loginValidationSchema = yup
  .object()
  .shape({
    email: yup.string().email("Invalid email").required("*"),
    password: yup.string().required("*"),
  })
  .required();

// SIGNUP PAGE
export const signUpValidationSchema = yup
  .object()
  .shape({
    fname: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .min(2, "First Name is too short")
      .max(40, "First Name is too long"),
    lname: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .min(2, "Last Name is too short")
      .max(40, "Last Name is too long"),
    email: yup.string().email("Invalid email").required("*"),
    password: yup.string().min(6).required("*"),
    repeatpassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match"),
    phone: yup.string().min(10).required("*"),
  })
  .required();
