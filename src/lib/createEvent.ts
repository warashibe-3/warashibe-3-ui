import axios from "axios";
import type { EventModel } from "src/types/EventModel";

import { host } from "./ApiSetting";

export interface EventResponse {
  eventId: number;
  eventName: string;
  statusId: number;
  status: "Assigned" | "Completed";
}

const basePath = "/events";

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default async (userId: string): Promise<EventModel[]> => {
  const res = await axios.post(`http://${host}${basePath}/${userId}`);
  return res.data;
};
