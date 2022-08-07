import type { NextApiRequest, NextApiResponse } from "next";
import joinEvent from "src/lib/joinEvent";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { snsId, taskId } = req.body;
  const { eventId } = req.query;

  await joinEvent(snsId, taskId, eventId as string)
    .catch((err) => {
      console.error(err);
      return [];
    })
    .then((members) => {
      res.status(201).json(members);
    });
};
