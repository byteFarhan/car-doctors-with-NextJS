import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(team);
}

const team = [
  {
    id: 1,
    job_title: "Engine Expert",
    job_category: "Car Engine Plug",
    img: "https://i.postimg.cc/9Xpy40SD/1.jpg",
  },
  {
    id: 2,
    job_title: "Engine Expert",
    job_category: "Car Engine Plug",
    img: "https://i.postimg.cc/ZnVNXs38/2.jpg",
  },
  {
    id: 3,
    job_title: "Engine Expert",
    job_category: "Car Engine Plug",
    img: "https://i.postimg.cc/bNwk18c3/3.jpg",
  },
];
