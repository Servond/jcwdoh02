"use client";

import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "@/lib/redux/hooks";
import { loginSuccess } from "@/lib/redux/feature/authSlice";

import { IUser } from "@/interface/user.interface";

export default function Auth({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  async function checkLogin() {
    const cookie = (await getCookie("token")) || "";

    try {
      if (cookie) {
        const token: IUser = jwtDecode(cookie);

        dispatch(loginSuccess(token));
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return <>{children}</>;
}
