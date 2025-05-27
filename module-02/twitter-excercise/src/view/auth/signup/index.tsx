"use client";
import { useState } from "react";
import { Formik, Form, FormikProps } from "formik";
import { Button } from "@/components/ui/button";
import Notification from "@/utils/notification";
import AuthCard from "../component/auth-card";
import Loading from "@/components/ui/loading";
import { ISignup } from "@/interface/user.interface";
import { signupSchema } from "./schema";
import { signupService } from "@/service/auth.service";

export default function SignupView() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <>
      {/* {isLoading ? <Loading /> : null} */}
      <AuthCard>
        <div className="absolute top-6 text-3xl font-bold">SIGN UP NOW</div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            name: "",
            confirmationPassword: "",
          }}
          validationSchema={signupSchema}
          onSubmit={async ({ name, email, password }) => {
            try {
              setIsLoading(true);
              await signupService({ name, email, password })
                .then(() => setIsLoading(false))
                .then(() => Notification("Sign Up Success", "success"));
            } catch (err) {
              const error = err as any;
              setIsLoading(false);
              Notification(error.message, "error");
            }
          }}
        >
          {(props: FormikProps<ISignup>) => {
            const { values, errors, touched, handleChange } = props;

            return (
              <Form className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label>Name</label>
                  <input
                    className="border border-black rounded-md p-2"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                  />
                  {touched.name && errors.name ? (
                    <div className="text-red-500">{errors.name}</div>
                  ) : null}
                </div>
                <div className="flex flex-col">
                  <label>Email</label>
                  <input
                    className="border border-black rounded-md p-2"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <div className="text-red-500">{errors.email}</div>
                  ) : null}
                </div>
                <div className="flex flex-col">
                  <label>password</label>
                  <input
                    className="border border-black rounded-md p-2"
                    type="text"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {touched.password && errors.password ? (
                    <div className="text-red-500">{errors.password}</div>
                  ) : null}
                </div>
                <div className="flex flex-col">
                  <label>Confirmation Password</label>
                  <input
                    className="border border-black rounded-md p-2"
                    type="text"
                    name="confirmationPassword"
                    onChange={handleChange}
                    value={values.confirmationPassword}
                  />
                  {touched.confirmationPassword &&
                  errors.confirmationPassword ? (
                    <div className="text-red-500">
                      {errors.confirmationPassword}
                    </div>
                  ) : null}
                </div>
                <Button
                  className="border border-gray-400 rounded-md p-2 w-[100px] bg-gray-400"
                  type="submit"
                >
                  Sign Up
                </Button>
              </Form>
            );
          }}
        </Formik>
      </AuthCard>
    </>
  );
}
