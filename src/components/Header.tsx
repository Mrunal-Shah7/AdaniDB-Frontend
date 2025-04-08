
import React from "react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center py-20 md:py-24 relative">
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 max-w-5xl">
        <span className="text-gradient">AdaniDB</span>{" "}
      </h1>
      <h2>XENOSTAR7</h2>  
    </header>
  );
};

export default Header;
