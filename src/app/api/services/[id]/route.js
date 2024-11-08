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

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  try {
    const id = params?.id;
    const updatedService = await request.json();
    const updatedDoc = {
      $set: {
        ...updatedService,
      },
    };
    const resp = await db
      .collection("services")
      .updateOne({ _id: new ObjectId(id) }, updatedDoc, { upsert: true });
    return NextResponse.json(resp);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error!", error },
      { status: 500 }
    );
  }
};
