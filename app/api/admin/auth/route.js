import { NextResponse } from "next/server";
import { checkPassword, createSession, destroySession } from "@/lib/admin-auth";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  if (body.action === "logout") {
    await destroySession();
    return NextResponse.json({ok:true});
  }
  if (!checkPassword(body.password || "")) {
    return NextResponse.json({ok:false,error:"Invalid password"},{status:401});
  }
  await createSession();
  return NextResponse.json({ok:true});
}