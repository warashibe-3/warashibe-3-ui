import got from "got";
import type { NextApiRequest, NextApiResponse } from "next";

interface Member {
  snsId: string;
  userName: string;
  taskId: string;
  taskName: string;
}

const host = "ec2-54-168-156-21.ap-northeast-1.compute.amazonaws.com:8080";
const basePath = "/events/tasks/all_assigned/snsid_aaaaa";

const fetchMember = async (eventId: string): Promise<Member[]> => {
  const { allAssignedList } = await got(`http://${host}${basePath}/${eventId}`).json();

  return allAssignedList.map((member: Member) => {
    return member;
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.eventId as string;

  await fetchMember(eventId)
    .then((members) => {
      return members;
    })
    .catch((err) => {
      console.error(err);
      return [];
    })
    .then((members) => {
      res.status(200).json(members);
    });
};
