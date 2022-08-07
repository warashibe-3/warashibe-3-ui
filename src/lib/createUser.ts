import axios from "axios";

import { host } from "./ApiSetting";

const basePath = "/users/register";

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default async (userId: string): Promise<any> => {
  const res = await axios.post(`http://${host}${basePath}`, { snsId: userId });
  return res.data;
};
