import axios from "axios";

import { host } from "./ApiSetting";

const basePath = "/events/users/weakpoint";

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default async (snsId: string, taskId: string, eventId: string): Promise<any> => {
  await axios.post(`http://${host}${basePath}`, {
    snsId,
    taskId,
    eventId,
  });

  return { status: "OK" };
};
