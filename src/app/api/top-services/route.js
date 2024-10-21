import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectDB();
    const topServices = await db.collection("top-services").find().toArray();
    return NextResponse.json(topServices);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong!", error });
  }
}
