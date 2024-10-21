import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectDB();
    const resp = await db.collection("testimonial-data").find().toArray();
    return NextResponse.json(resp);
  } catch (error) {
    return NextResponse.status(400).json({
      message: "An error occoured!",
      error,
    });
  }
}
