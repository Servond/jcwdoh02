"use client";
import { useState, useEffect } from "react";

import { fetchUserService } from "@/service/user.service";
import { IUser } from "@/interface/user.interface";

export default function UserList() {
  const [users, setUsers] = useState<IUser[]>([]);

  async function fetchUsers() {
    try {
      const data = await fetchUserService();

      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        <div className="flex flex-col gap-2">
          {users.map((user, idx) => (
            <div
              key={idx}
              className="flex flex-row bg-white rounded-md p-2 gap-5 w-[300px]"
            >
              <img
                src={user.avatar}
                alt={`avatar-${idx}`}
                className="rounded-full h-10 w-10"
              />
              <div className="flex flex-col">
                <div className="font-bold">{user.email}</div>
                <div>{user.name}</div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
