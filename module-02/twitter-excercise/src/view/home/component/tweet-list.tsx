"use client";
import { useState, useEffect } from "react";

import { fetchPostService } from "@/service/post.service";
import { IPost } from "@/interface/post.interface";
export default function TweetList() {
  const [posts, setPosts] = useState<IPost[]>([]);

  async function fetchPost() {
    try {
      const data = await fetchPostService();

      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

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
