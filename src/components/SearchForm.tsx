import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  SearchParams,
  fetchAllAu2024,
  searchAu2024ByEnrollment,
  searchAu2024ByName,
  searchBtech2022ByEnrollment,
  searchBtech2023ByEnrollment,
  searchBtech2024ByName,
  searchBtech2024ByEnrollment,
} from "@/services/apiService";
import { Search } from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion

interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
  isLoading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading }) => {
  const { toast } = useToast();
  const [enrollmentNumber, setEnrollmentNumber] = useState<string>("");
  const [name, setName] = useState<string>("");

  // Animation variants for the card with a 1-second delay
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        delay: 1, // 1-second delay before the animation starts
        duration: 0.8, 
        ease: "easeOut" 
      },
    },
  };

  // Animation variants for inputs
  const inputVariants = {
    initial: { scale: 1 },
    focus: { scale: 1.02, transition: { duration: 0.3 } },
  };

  // Animation variants for buttons
  const buttonVariants = {
    hover: { scale: 1.05, y: -2, transition: { duration: 0.3 } },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!enrollmentNumber && !name) {
      toast({
        title: "Search Error",
        description: "Please enter at least one search parameter",
        variant: "destructive",
      });
      return;
    }

    const params: SearchParams = {};

    if (enrollmentNumber) params.enrollmentNumber = enrollmentNumber;
    if (name) params.name = name;

    onSearch(params);
  };

  const resetForm = () => {
    setEnrollmentNumber("");
    setName("");
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <Card className="glass w-full max-w-4xl mx-auto">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col space-y-1.5">
              <h2 className="text-2xl font-semibold text-gradient">Search Students</h2>
              <p className="text-muted-foreground text-sm">
                Enter search parameters to find student records
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="enrollmentNumber">Enrollment Number</Label>
                <motion.div
                  variants={inputVariants}
                  initial="initial"
                  whileFocus="focus"
                >
                  <Input
                    id="enrollmentNumber"
                    placeholder="e.g. EN2021001"
                    value={enrollmentNumber}
                    onChange={(e) => setEnrollmentNumber(e.target.value)}
                    className="bg-secondary/50"
                  />
                </motion.div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <motion.div
                  variants={inputVariants}
                  initial="initial"
                  whileFocus="focus"
                >
                  <Input
                    id="name"
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-secondary/50"
                  />
                </motion.div>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
              >
                <Button
                  variant="outline"
                  type="button"
                  onClick={resetForm}
                  className="bg-secondary/50 hover:bg-secondary"
                >
                  Reset
                </Button>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
              >
                <Button
                  type="submit"
                  className="gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <Search size={16} />
                  )}
                  Search
                </Button>
              </motion.div>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SearchForm;