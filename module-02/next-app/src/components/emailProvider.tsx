"use client";
import { EmailContext } from "@/context/emailContext";

export default function EmailProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const value = {
    email: "budi@gmail.com",
  };
  return (
    <>
      <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
    </>
  );
}
