export interface Student {
  key: string;
  name: string;
  classroomId: string;
  avatar: string;
  email: string;
  status: string;
}

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "classroomId",
    label: "CLASSROOM",
  },
];

const students: Student[] = [
  {
    key: "1",
    name: "Student 1",
    classroomId: "class1",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "test@mail.com",
    status: "paused",
  },
  {
    key: "2",
    name: "Student 2",
    classroomId: "class1",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "test@mail.com",
    status: "active",
  },
  {
    key: "3",
    name: "Student 3",
    classroomId: "class2",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "test@mail.com",
    status: "vacation",
  },
  {
    key: "4",
    name: "Student 4",
    classroomId: "class2",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "test@mail.com",
    status: "active",
  },
];

export { columns, students };
