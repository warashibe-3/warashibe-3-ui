import type { NextApiRequest, NextApiResponse } from "next";
import fetchMember from "src/lib/fetchMember";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.eventId as string;

  await fetchMember(eventId)
    .catch((err) => {
      console.error(err);
      return [];
    })
    .then((members) => {
      res.status(200).json(members);
    });
};
