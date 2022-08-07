import type { NextApiRequest, NextApiResponse } from "next";
import fetchEvent from "src/lib/fetchEvent";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.userId as string;

  await fetchEvent(eventId)
    .catch((err) => {
      console.error(err);
      return [];
    })
    .then((events) => {
      res.status(200).json(events);
    });
};
