import { connectDB } from "@/lib/connectDB";
import { services } from "@/../public/data/services";
import { NextResponse } from "next/server";

export async function GET() {
  const db = await connectDB();
  const topServicesCollection = db.collection("top-services");
  try {
    await topServicesCollection.deleteMany();
    const resp = await topServicesCollection.insertMany(services);
    return NextResponse.json({ message: "Seeded successfully.", resp });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
