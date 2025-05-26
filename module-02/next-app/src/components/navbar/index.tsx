"use client";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { login, logout } from "@/lib/redux/feature/authSlice";

export default function Navbar() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between p-4">
      <div>LOGO</div>
      {auth.user.email}
      <div className="flex gap-4">
        {auth.isLogin ? (
          <button onClick={() => dispatch(logout())}>Logout</button>
        ) : (
          <>
            <button>Login</button>
            <button>Register</button>
          </>
        )}
      </div>
    </div>
  );
}
