import React, { useState } from "react";
import Header from "@/components/Header";
import SearchForm from "@/components/SearchForm";
import StudentTable from "@/components/StudentTable";
import StudentCard from "@/components/StudentCard";
import NotFound from "@/components/NotFound";
import { Toaster } from "@/components/ui/sonner";
import {
  Au2024,
  SearchParams,
  searchAu2024ByEnrollment,
  searchAu2024ByName,
} from "@/services/apiService";

const Index: React.FC = () => {
  const [students, setStudents] = useState<Au2024[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Au2024 | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const handleSearch = async (params: SearchParams) => {
    try {
      setIsLoading(true);
      setSelectedStudent(null);
      setHasSearched(true);

      let results: Au2024[] = [];

      if (params.enrollmentNumber) {
        const enrollment = Number(params.enrollmentNumber);
        results = await searchAu2024ByEnrollment(enrollment);
      } else if (params.name) {
        results = await searchAu2024ByName(params.name);
      }

      setStudents(results);
      if (results.length === 1) {
        setSelectedStudent(results[0]);
      }
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectStudent = (student: Au2024) => {
    setSelectedStudent(student);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseStudentCard = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="min-h-screen pb-12">
      <Toaster position="top-center" />
      <div className="container px-4 mx-auto">
        <Header />
        <SearchForm onSearch={handleSearch} isLoading={isLoading} />
        {selectedStudent ? (
          <StudentCard student={selectedStudent} onClose={handleCloseStudentCard} />
        ) : (
          <>
            {hasSearched && students.length === 0 && <NotFound />}
            {students.length > 0 && (
              <StudentTable students={students} onSelectStudent={handleSelectStudent} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
