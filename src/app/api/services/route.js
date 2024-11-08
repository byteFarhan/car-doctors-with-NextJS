import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
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

export const GET = async (request) => {
  const db = await connectDB();
  try {
    let query = {};
    const email = request.nextUrl.searchParams.get("_email");
    //   console.log("email", email);
    if (email) {
      query = { authorEmail: email };
    }
    const services = await db.collection("services").find(query).toArray();
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error!", error },
      { status: 500 }
    );
  }
};

export const DELETE = async (request) => {
  const db = await connectDB();
  try {
    const id = request.nextUrl.searchParams.get("_delete-service");
    const resp = await db
      .collection("services")
      .deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json(resp);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error!", error },
      { status: 500 }
    );
  }
};
