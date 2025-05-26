import axios from "axios";

import { ILogin, ISignUp } from "@/interface/user.interface";
export async function signUpService(params: ISignUp) {
  try {
    const { data } = await axios.post(
      "https://friskykey-us.backendless.app/api/data/user",
      params
    );
  } catch (err) {
    throw err;
  }
}

export async function loginService(params: ILogin) {
  try {
    const { data } = await axios.get(
      `https://friskykey-us.backendless.app/api/data/user?where=email%3D'${params.email}'%20and%20password%3D'${params.password}'`
    );
    return data[0];
  } catch (err) {
    throw err;
  }
}
