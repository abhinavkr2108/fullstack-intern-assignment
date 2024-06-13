import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const userDetails = await req.json();
  console.log(userDetails);
  return new NextResponse(JSON.stringify(userDetails));
}
