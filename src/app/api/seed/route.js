import { connectDB } from "@/lib/connectDB";
import { services } from "@/../public/data/services";
// import { team } from "@/../public/data/team";
import { popularProducts } from "@/../public/data/popularProducts";
import { NextResponse } from "next/server";
// import { testimonialData } from "../../../../public/data/testimonialData";

export async function GET() {
  const db = await connectDB();
  const collection = db.collection("services");
  try {
    await collection.deleteMany();
    const resp = await collection.insertMany(services);
    return NextResponse.json({ message: "Seeded successfully.", resp });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
