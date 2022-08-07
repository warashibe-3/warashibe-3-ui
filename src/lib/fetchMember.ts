import axios from "axios";

import { host } from "./ApiSetting";

export interface Member {
  snsId: string;
  userName: string;
  taskId: number;
  taskName: string;
  specialist: string;
}

const basePath = "/events/tasks/all_assigned/snsid_aaaaa";

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default async (eventId: string): Promise<Member[]> => {
  const res = await axios(`http://${host}${basePath}/${eventId}`);

  return res.data.allAssignedList.map((member: Member) => {
    return member;
  });
};
