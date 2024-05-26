import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ url: string }>
) {
  console.log({ req });
  res.status(200).json({ url: req.url || "" });
}
