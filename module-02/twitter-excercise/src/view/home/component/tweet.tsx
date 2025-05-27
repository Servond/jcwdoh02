"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAppSelector } from "@/lib/redux/hooks";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { postTweetService } from "@/service/post.service";

export default function Tweet() {
  const { user, isLogin } = useAppSelector((state) => state.auth);
  const [tweet, setTweet] = useState<string>("");
  const [charCount, setCharCount] = useState<number>(0);

  function handleOnChange(value: string) {
    setTweet(value);
    setCharCount(value.length);
  }

  return (
    <>
      {isLogin ? (
        <div className="flex flex-row items-center gap-5 place-self-start w-[800px]">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-40 h-40 border rounded-full"
          />
          <div className="bg-white border rounded-md w-full p-5 flex flex-col items-center gap-3">
            <Textarea
              className="rounded-md w-[560px] h-[80px] resize-none border-none shadow-none "
              placeholder="Type your story"
              onChange={(e) => handleOnChange(e.target.value)}
              maxLength={350}
            />
            <div className="place-self-end text-gray-400">{charCount}/350</div>
            <hr className="h-[0.5px] w-full bg-gray-100" />
            <Button
              className="place-self-end rounded-4xl min-w-20"
              onClick={() => postTweetService(user, tweet)}
            >
              Post
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
