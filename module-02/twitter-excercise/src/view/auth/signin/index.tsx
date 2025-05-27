"use client";
import { useRouter } from "next/navigation";
import { Formik, Form, FormikProps } from "formik";
import { useAppDispatch } from "@/lib/redux/hooks";
import { login } from "@/lib/redux/feature/authSlice";

import { Button } from "@/components/ui/button";
import AuthCard from "../component/auth-card";

import { signinService } from "@/service/auth.service";
import Notification from "@/utils/notification";
import { ISignin } from "@/interface/user.interface";
import { signinSchema } from "./schema";

export default function SigninView() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <>
      <AuthCard>
        <div className="absolute top-6 text-3xl font-bold">SIGN IN NOW</div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={signinSchema}
          onSubmit={async (values) => {
            try {
              const { email, name, avatar, objectId } = await signinService(
                values
              );
              dispatch(login({ email, name, avatar, userId: objectId })).then(
                () => {
                  router.push("/"), Notification("Sign in success", "success");
                }
              );
            } catch (err) {
              const error = err as any;
              Notification(error.message, "error");
            }
          }}
        >
          {(props: FormikProps<ISignin>) => {
            const { values, errors, touched, handleChange } = props;

            return (
              <Form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
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
                <div className="flex flex-col gap-2">
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
                <Button
                  className="border border-gray-400 rounded-md p-2 w-[100px] bg-gray-400"
                  type="submit"
                >
                  Sign In
                </Button>
              </Form>
            );
          }}
        </Formik>
      </AuthCard>
    </>
  );
}
