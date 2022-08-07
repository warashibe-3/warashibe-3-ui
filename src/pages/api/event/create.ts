import type { NextApiRequest, NextApiResponse } from "next";
import createEvent from "src/lib/createEvent";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  return await createEvent(req.body.snsId, {
    title: req.body.title,
    type: req.body.type,
    person: Number(req.body.person),
    isCompleted: false,
    isReviewed: false,
  })
    .catch((err) => {
      console.error(err);
      return [];
    })
    .then((eventId) => {
      res.status(201).json({ eventId });
    });
};
