"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";

import { logout } from "@/lib/redux/feature/authSlice";
export default function Navbar() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className="flex justify-between p-4">
      <div
        className="text-4xl font-bold hover:cursor-pointer"
        onClick={() => router.push("/")}
      >
        LOGO
      </div>
      {auth.isLogin ? (
        <div className="flex gap-4 items-center">
          <div>Welcome, {auth.user?.name}</div>
          <Button onClick={() => dispatch(logout())}>Sign Out</Button>
        </div>
      ) : (
        <div className="flex gap-4 align-middle">
          <Button onClick={() => router.push("/auth/signup")}>Sign Up</Button>
          <Button onClick={() => router.push("/auth/signin")}>Sign In</Button>
        </div>
      )}
    </div>
  );
}
