import type { NextApiRequest, NextApiResponse } from "next";
import createUser from "src/lib/createUser";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  await createUser(body.snsId)
    .catch((err) => {
      console.error(err);
      return [];
    })
    .then(() => {
      res.status(201).end();
    });
};
