"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons
import Content from "@/components/Content";
import Link from "next/link";

const Welcome: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <AuroraBackground>
      {/* The rest of the welcome page */}
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Gabriel Stanziola
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          "Transforming data into insights and codes into solutions".
        </div>

        <Link href="@/components/Content.tsx" passHref>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Know Me
          </button>
        </Link>
      </motion.div>
    </AuroraBackground>
  );
};

export default Welcome;
