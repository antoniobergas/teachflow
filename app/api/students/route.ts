import { NextResponse } from "next/server";

export interface Student {
  id: string;
  name: string;
  classroomId: string;
  avatar: string;
  email: string;
  status: string;
}

const students: Student[] = [
  {
    id: "1",
    name: "Student 1",
    classroomId: "class1",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "test@mail.com",
    status: "paused",
  },
  {
    id: "2",
    name: "Student 2",
    classroomId: "class1",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "test@mail.com",
    status: "active",
  },
  {
    id: "3",
    name: "Student 3",
    classroomId: "class2",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "test@mail.com",
    status: "vacation",
  },
  {
    id: "4",
    name: "Student 4",
    classroomId: "class2",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "test@mail.com",
    status: "active",
  },
];

export async function GET(request: Request) {
  return NextResponse.json(students);
}
