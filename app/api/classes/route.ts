import { NextResponse } from "next/server";

export interface Class {
  id: string;
  name: string;
}

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

export default function GET(request: Request) {
  return NextResponse.json(classes);
}
