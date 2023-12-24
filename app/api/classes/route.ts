import { Class } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

const classes: Class[] = [
  {
    id: "class1",
    name: "Class 1",
  },
  {
    id: "class2",
    name: "Class 2",
  },
  {
    id: "class3",
    name: "Class 3",
  },
  {
    id: "class4",
    name: "Class 4",
  },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(classes);
}
