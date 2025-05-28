"use client";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

import { fetchPost } from "@/lib/redux/feature/postSlice";
export default function TweetList() {
  const posts = useAppSelector((state) => state.post?.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  console.log("RENDER ULANG");
  return (
    <div className="w-[800px]">
      {posts.length > 0 ? (
        <div className="flex flex-col gap-10">
          {posts.map((post, idx) => (
            <div
              key={`tweet-${idx}`}
              className="bg-white border rounded-md w-full h-[120px] flex flex-row items-center gap-5"
            >
              <img
                src={post.avatar}
                alt="avatar"
                className="relative left-[-30px] w-34 h-34 border-none rounded-full bg-[#f1f5f9] shadow-2xl"
              />
              <div className="flex flex-col gap-2">
                <div className="font-bold">{post.email}</div>
                <div>{post.tweet}</div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
