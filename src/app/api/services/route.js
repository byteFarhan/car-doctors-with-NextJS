import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const db = await connectDB();
  try {
    const newService = await request.json();
    const resp = await db.collection("services").insertOne(newService);
    return NextResponse.json(resp);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error!", error },
      { status: 500 }
    );
  }
};
