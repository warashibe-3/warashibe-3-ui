import axios from "axios";
import type { EventModel } from "src/types/EventModel";

import { host } from "./ApiSetting";

const basePath = "/events/status";

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default async (eventId: string): Promise<EventModel> => {
  const res = await axios.post(`http://${host}${basePath}`, {
    eventId: eventId,
  });
  return res.data.eventId;
};
