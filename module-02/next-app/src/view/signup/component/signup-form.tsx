"use client";

import { Formik, Form, FormikProps } from "formik";
import { SnackbarProvider } from "notistack";
import Notification from "@/components/notification";

import { ISignUp } from "@/interface/user.interface";
import { signUpSchema } from "../schema";

import { signUpService } from "@/service/auth.service";

export default function SignUpForm() {
  return (
    <>
      <SnackbarProvider />
      <Formik
        initialValues={{
          email: "",
          password: "",
          firstname: "",
          lastname: "",
        }}
        validationSchema={signUpSchema}
        onSubmit={async (values) => {
          try {
            await signUpService(values);

            Notification("Signup success", "success");
          } catch (err) {
            const error = err as any;
            Notification(error.message, "error");
          }
        }}
      >
        {(props: FormikProps<ISignUp>) => {
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
              <div>
                <label>Firstname :</label>
                <input
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  value={values.firstname}
                />
                {touched.firstname && errors.firstname ? (
                  <div className="text-red-500">{errors.firstname}</div>
                ) : null}
              </div>
              <div>
                <label>Lastname :</label>
                <input
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  value={values.lastname}
                />
              </div>
              <button type="submit">Signup</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
