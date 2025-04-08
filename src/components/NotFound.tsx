
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <Card className="glass w-full max-w-4xl mx-auto mt-6">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="h-10 w-10 rounded-full flex items-center justify-center bg-secondary/40">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardTitle className="text-xl font-semibold">No Results Found</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          No student records match your search criteria. Please try different search parameters.
        </p>
      </CardContent>
    </Card>
  );
};

export default NotFound;
