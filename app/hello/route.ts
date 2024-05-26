import { NextRequest } from "next/server";

export const GET = (request: NextRequest) => {
  return Response.json({ url: request.url });
};
