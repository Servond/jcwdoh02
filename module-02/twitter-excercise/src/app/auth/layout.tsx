"use client";
import { SnackbarProvider } from "notistack";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SnackbarProvider />
      <div className="flex flex-row justify-center items-center md:justify-between md:p-24 bg-[#1e293b] h-[100vh]">
        <div className="hidden md:block md:w-[500px]">
          <div></div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
