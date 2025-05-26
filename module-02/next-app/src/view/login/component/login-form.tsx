"use client";

import { useAppDispatch } from "@/lib/redux/hook";
import { Formik, Form, FormikProps } from "formik";
import { SnackbarProvider } from "notistack";
import Notification from "@/components/notification";

import { ILogin } from "@/interface/user.interface";
import { loginSchema } from "../schema";

import { loginService } from "@/service/auth.service";
import { login } from "@/lib/redux/feature/authSlice";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  return (
    <>
      <SnackbarProvider />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          try {
            const { email, firstname, lastname } = await loginService(values);

            dispatch(login({ email, firstname, lastname })).then(() =>
              Notification("Login success", "success")
            );
          } catch (err) {
            const error = err as any;
            Notification(error.message, "error");
          }
        }}
      >
        {(props: FormikProps<ILogin>) => {
          const { values, errors, touched, handleChange } = props;

          return (
            <Form>
              <div>
                <label>Email :</label>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                {touched.email && errors.email ? (
                  <div className="text-red-500">{errors.email}</div>
                ) : null}
              </div>
              <div>
                <label>password :</label>
                <input
                  type="text"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                {touched.password && errors.password ? (
                  <div className="text-red-500">{errors.password}</div>
                ) : null}
              </div>
              <button type="submit">Login</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
