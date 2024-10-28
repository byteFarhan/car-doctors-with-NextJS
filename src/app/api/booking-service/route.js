import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const db = await connectDB();
  try {
    const newBooking = await request.json();
    const resp = await db.collection("bookings").insertOne(newBooking);
    return NextResponse.json(resp);
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured!", error },
      { status: 500 }
    );
  }
};

export const GET = async (request) => {
  const db = await connectDB();
  try {
    // console.log(request);
    const email = request.nextUrl.searchParams.get("_email");
    // console.log(email);
    const resp = await db
      .collection("bookings")
      .find({ "userInfo.email": email })
      .toArray();
    return NextResponse.json(resp);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error!", error },
      { status: 500 }
    );
  }
};
