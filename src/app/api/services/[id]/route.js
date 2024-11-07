import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  try {
    const resp = await db
      .collection("services")
      .findOne({ _id: new ObjectId(params.id) });
    return NextResponse.json(resp);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 }
    );
  }
};
