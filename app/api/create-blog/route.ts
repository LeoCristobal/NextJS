import { NextResponse } from "next/server";

export async function POST() {
  console.log("Hello");

  return NextResponse.json({ success: true });
}
