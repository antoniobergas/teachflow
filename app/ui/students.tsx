import React, { Key, useCallback, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
} from "@nextui-org/react";
import { Student } from "@/api/students/route";
import { Class } from "@/api/classes/route";

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

export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);

  useEffect(() => {
    fetch("/api/students")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  const renderCell = useCallback((student: Student, columnKey: Key) => {
    const cellValue = student[columnKey as keyof Student];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: student.avatar }}
            description={student.email}
            name={cellValue}
          >
            {student.email}
          </User>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.key}
            align={column.key === "actions" ? "center" : "start"}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={students}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
