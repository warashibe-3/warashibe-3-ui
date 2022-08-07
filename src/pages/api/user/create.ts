import type { NextApiRequest, NextApiResponse } from "next";
import createUser from "src/lib/createUser";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  await createUser(req.body.snsId)
    .catch((err) => {
      console.error(err);
      return [];
    })
    .then(() => {
      res.status(201).json({ message: "success" });
    });
};
