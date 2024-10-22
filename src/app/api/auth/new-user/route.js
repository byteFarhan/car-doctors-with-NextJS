import bcrypt from "bcrypt";
import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const db = await connectDB();
    const user = await request.json();
    // console.log(user);
    // console.log(user.email);
    const hashedPass = bcrypt.hashSync(user.password, 14);
    const userCollection = db.collection("users");
    const isUserExist = await userCollection.findOne({ email: user.email });
    console.log(isUserExist);
    if (isUserExist) {
      return NextResponse.json(
        { message: "User already exist!" },
        { status: 409 }
      );
    }
    const resp = await userCollection.insertOne({
      ...user,
      password: hashedPass,
    });
    return NextResponse.json({
      message: "User created successfully.",
      data: resp,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred!", error },
      { status: 500 }
    );
  }
}
