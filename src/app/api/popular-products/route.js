import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectDB();
    const products = await db.collection("popular-products").find().toArray();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong!",
      error,
      status: 500,
    });
  }
}
