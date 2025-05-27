import { object, string } from "yup";

export const signinSchema = object({
  email: string()
    .trim()
    .email("Invalid Email")
    .required("Email cannot be empty"),
  password: string().trim().required("Password cannot be empty"),
});
