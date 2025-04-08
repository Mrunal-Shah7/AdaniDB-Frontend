import React, { useEffect, useState } from "react";
import {
  Btech2022,
  Btech2023,
  Btech2024,
  searchBtech2022ByEnrollment,
  searchBtech2023ByEnrollment,
  searchBtech2024ByEnrollment,
  Au2024,
} from "@/services/apiService";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface StudentCardProps {
  student: Au2024;
  onClose: () => void;
}

type DetailedStudent = Btech2022 | Btech2023 | Btech2024;

const StudentCard: React.FC<StudentCardProps> = ({ student, onClose }) => {
  const [detailedStudent, setDetailedStudent] = useState<DetailedStudent | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const enrollmentNumber = Number(student.enrollment);
        let result;

        if (student.year === 1) {
          result = await searchBtech2024ByEnrollment(enrollmentNumber);
        } else if (student.year === 2) {
          result = await searchBtech2023ByEnrollment(enrollmentNumber);
        } else if (student.year === 3) {
          result = await searchBtech2022ByEnrollment(enrollmentNumber);
        }

        if (result && result.length > 0) {
          setDetailedStudent(result[0]);
        }
      } catch (error) {
        console.error("Error fetching student details", error);
      }
    };

    fetchDetails();
  }, [student]);

  if (!detailedStudent) {
    return null;
  }

  return (
    <Card className="card-glass w-full max-w-4xl mx-auto mt-6 overflow-hidden relative animate-in fade-in">
      <Button
        size="sm"
        variant="ghost"
        className="absolute top-2 right-2 rounded-full p-2 h-8 w-8"
        onClick={onClose}
      >
        <X size={16} />
      </Button>

      <CardHeader className="pb-2">
        <CardTitle className="text-gradient text-2xl">{detailedStudent.name}</CardTitle>
        <CardDescription>
          Enrollment Number: {student.enrollment.toString()}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Year</p>
            <p className="font-medium">{student.year}</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Division</p>
            <p className="font-medium">{student.division}</p>
          </div>

          {"program" in detailedStudent && (
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Program</p>
              <p className="font-medium">{detailedStudent.program}</p>
            </div>
          )}

          {"contact" in detailedStudent && (
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Contact</p>
              <p className="font-medium">{detailedStudent.contact}</p>
            </div>
          )}

          {"temp" in detailedStudent && (
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Temp</p>
              <p className="font-medium">{detailedStudent.temp}</p>
            </div>
          )}

          {"usn" in detailedStudent && (
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">USN</p>
              <p className="font-medium">{detailedStudent.usn}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
