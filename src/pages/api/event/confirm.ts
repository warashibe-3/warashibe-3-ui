import type { NextApiRequest, NextApiResponse } from "next";
import confirmEvent from "src/lib/confirmEvent";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.body.eventId as string;

  await confirmEvent(eventId)
    .catch((err) => {
      console.error(err);
      return [];
    })
    .then(() => {
      res.status(201).json({ status: "up" });
    });
};
