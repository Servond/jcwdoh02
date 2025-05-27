import { ISignin } from "@/interface/user.interface";
import axios from "axios";

export async function signupService(params: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_BACKENDLESS_API}/user`, {
      ...params,
      avatar: `${process.env.NEXT_PUBLIC_AVATAR_API}/${params.email}`,
    });
  } catch (err) {
    throw err;
  }
}

export async function signinService(params: ISignin) {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKENDLESS_API}/user?where=email%3D'${params.email}'%20and%20password%3D'${params.password}'`
    );
    return data[0];
  } catch (err) {
    throw err;
  }
}
