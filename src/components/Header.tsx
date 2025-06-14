import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const Header: React.FC = () => {
  // Animation variants for h1 and h2 with a 0.5-second base delay
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.5 + i * 0.3, // Base delay of 0.5s + staggered delay for each element
        duration: 0.8, 
        ease: "easeOut" 
      },
    }),
  };

  return (
    <header className="flex flex-col items-center justify-center text-center py-20 md:py-24 relative">
      <motion.h1
        className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 max-w-5xl"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={0} // First element
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover effect
      >


        <span className="text-gradient">AdaniDB</span>{" "}
      </motion.h1>
      <motion.h2
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={1} // Second element with additional staggered delay
      >
        XENOSTAR7
      </motion.h2>

      <br></br>
      <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-50/80 dark:bg-red-900/20 border border-red-200/50 dark:border-red-800/50 rounded-full backdrop-blur-sm"
        >
          <motion.div
            className="w-2 h-2 bg-red-500 rounded-full"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
            <span className="text-red-700 dark:text-red-300 text-sm font-medium">
              Temporaliy down for a major update
            </span>
          </motion.div>







    </header>
  );
};

export default Header;