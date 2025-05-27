import axios from "axios";
import { IUser } from "@/interface/user.interface";

export async function fetchPostService() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKENDLESS_API}/user?loadRelations=tweets`
    );
    return data;
  } catch (err) {
    throw err;
  }
}

export async function postTweetService(user: IUser, tweet: string) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKENDLESS_API}/post`,
      {
        tweet,
      }
    );

    await axios.put(
      `${process.env.NEXT_PUBLIC_BACKENDLESS_API}/user/${user.userId}/tweets`,
      [data.objectId]
    );
  } catch (err) {
    throw err;
  }
}
