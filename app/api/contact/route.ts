import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    demo: true,
    message: "Concept preview only. No message was sent or reservation made.",
  });
}
