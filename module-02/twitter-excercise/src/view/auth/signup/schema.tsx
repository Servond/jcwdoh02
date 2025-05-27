import { object, string, ref } from "yup";

export const signupSchema = object({
  email: string()
    .trim()
    .email("Invalid Email")
    .required("Email cannot be empty"),
  password: string()
    .trim()
    .min(6, "Password must be at minimum 6 character")
    .required("Password cannot be empty"),
  confirmationPassword: string()
    .trim()
    .oneOf([ref("password"), ""], "Password does not match"),
  name: string().trim().required("Name cannot be empty"),
});
