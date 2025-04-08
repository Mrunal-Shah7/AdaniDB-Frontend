import React from "react";
import { Au2024 } from "@/services/apiService";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

interface StudentTableProps {
  students: Au2024[];
  onSelectStudent: (student: Au2024) => void;
}

const StudentTable: React.FC<StudentTableProps> = ({ students, onSelectStudent }) => {
  if (students.length === 0) {
    return null;
  }

  return (
    <Card className="glass w-full max-w-4xl mx-auto mt-6">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-gradient">Search Results</h2>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-secondary/20">
                <TableHead className="w-[180px]">Enrollment No.</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-center">Year</TableHead>
                <TableHead className="text-center">Division</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {students.map((student, index) => (
                <TableRow
                  key={index}
                  className="cursor-pointer hover:bg-primary/10 transition-colors"
                  onClick={() => onSelectStudent(student)}
                >
                  <TableCell className="font-medium">{student.enrollment.toString()}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell className="text-center">{student.year}</TableCell>
                  <TableCell className="text-center">{student.division}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentTable;
