import { ISignin } from "@/interface/user.interface";
import axios from "axios";
import sign from "jwt-encode";
import { setCookie } from "cookies-next";

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

    if (data.length === 0) throw new Error("User not found");

    const secret = "asd123";
    const payload = {
      email: data[0].email,
      name: data[0].name,
      avatar: data[0].avatar,
      userId: data[0].objectId,
      role: data[0].role,
    };

    const token = sign(payload, secret);
    setCookie("token", token);
    return payload;
  } catch (err) {
    throw err;
  }
}
