import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectDB();
    const team = await db.collection("team").find().toArray();
    return NextResponse.json(team);
  } catch (error) {
    return NextResponse.json({
      message: "Seomthing went wrong!",
      error,
      status: 500,
    });
  }
}
