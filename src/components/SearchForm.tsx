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
  searchBtech2024ByEnrollment
} from "@/services/apiService";
import { Search } from "lucide-react";

interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
  isLoading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading }) => {
  const { toast } = useToast();
  const [enrollmentNumber, setEnrollmentNumber] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that at least one search parameter is provided
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
    <Card className="glass w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-1.5">
            <h2 className="text-2xl font-semibold text-gradient">Search Students</h2>
            <p className="text-muted-foreground text-sm">
              Enter search parameters to find student records
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2"> {/* Adjusted grid to 2 columns */}
            <div className="space-y-2">
              <Label htmlFor="enrollmentNumber">Enrollment Number</Label>
              <Input
                id="enrollmentNumber"
                placeholder="e.g. EN2021001"
                value={enrollmentNumber}
                onChange={(e) => setEnrollmentNumber(e.target.value)}
                className="bg-secondary/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="e.g. John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-secondary/50"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button 
              variant="outline" 
              type="button" 
              onClick={resetForm}
              className="bg-secondary/50 hover:bg-secondary"
            >
              Reset
            </Button>
            
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
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchForm;
