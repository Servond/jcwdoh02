"use client";
import { useState, useRef } from "react";
import { useAppSelector } from "@/lib/redux/hooks";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SnackbarProvider } from "notistack";

import { postTweetService } from "@/service/post.service";
import Notification from "@/utils/notification";

export default function Tweet() {
  const { user, isLogin } = useAppSelector((state) => state.auth);
  const tweet = useRef<null | HTMLTextAreaElement>(null);
  const [charCount, setCharCount] = useState<number>(0);

  function handleOnChange(value: string) {
    setCharCount(value.length);
  }

  return (
    <>
      <SnackbarProvider />
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
              ref={tweet}
            />
            <div className="place-self-end text-gray-400">{charCount}/350</div>
            <hr className="h-[0.5px] w-full bg-gray-100" />
            <Button
              className="place-self-end rounded-4xl min-w-20"
              onClick={() => {
                if (tweet.current?.value) {
                  postTweetService(user, tweet.current.value).then(() => {
                    Notification("Post Success", "success");
                  });
                  tweet.current.value = "";
                } else {
                  Notification("Input cannot be empty", "error");
                }
              }}
            >
              Post
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
