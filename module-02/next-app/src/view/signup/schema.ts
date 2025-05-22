import { object, string } from "yup";

export const signUpSchema = object({
  email: string()
    .trim()
    .email("Invalid Email")
    .required("Email cannot be empty"),
  password: string()
    .trim()
    .min(6, "Password must be at minimum 6 character")
    .required("Password cannot be empty"),
  firstname: string().trim().required("Firstname cannot be empty"),
});
