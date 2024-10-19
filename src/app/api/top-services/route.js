import { NextResponse } from "next/server";
import { services } from "../../../../public/data/services";

export function GET() {
  return NextResponse.json(services);
}
