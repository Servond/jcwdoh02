import axios from "axios";
import { IUser } from "@/interface/user.interface";

export async function fetchUserService() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKENDLESS_API}/user`
    );
    return data;
  } catch (err) {
    throw err;
  }
}
