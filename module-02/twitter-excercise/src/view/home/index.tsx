"use client";

import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import Tweet from "./component/tweet";
import UserList from "./component/user-list";
import TweetList from "./component/tweet-list";

export default function HomeView() {
  // const router = useRouter();
  // async function checkLogin() {
  //   const cookie = (await getCookie("token")) || "";
  //   try {
  //     if (!cookie) router.push("/auth/signin");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   checkLogin();
  // });
  return (
    <div className="flex gap-10 justify-center bg-[#f1f5f9] h-[100vh] p-16">
      <div className="flex flex-col gap-10 ">
        <Tweet />
        <TweetList />
      </div>
      <UserList />
    </div>
  );
}
