import axios from "axios";

export interface Member {
  snsId: string;
  userName: string;
  taskId: number;
  taskName: string;
  specialist: string;
}

const host = "ec2-54-168-156-21.ap-northeast-1.compute.amazonaws.com:8080";
const basePath = "/events/tasks/all_assigned/snsid_aaaaa";

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default async (eventId: string): Promise<Member[]> => {
  const res = await axios(`http://${host}${basePath}/${eventId}`);

  return res.data.allAssignedList.map((member: Member) => {
    return member;
  });
};
