import { NextRequest } from "next/server";

export const GET = (request: NextRequest) => {
  return new Response(JSON.stringify({ url: request.url || "" }));
};
