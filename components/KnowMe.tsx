"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const KnowMe = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-100 via-gray-500 to-gray">
      {/* Header Section */}
      <header className="w-full py-10">
        <h1 className="text-center text-6xl font-bold">Who I am</h1>
      </header>

      {/* Main Section with Image on the Left and Text on the Right */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
        {/* Image Section */}
        <motion.div
          className="overflow-hidden border-4 border-gray-500"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/profile-pic.jpg" // replace with your own profile picture path
            alt="Profile Picture"
            width={278}
            height={278}
            className="object-cover"
          />
        </motion.div>

        {/* Profile Information Section */}
        <div className="max-w-lg text-left">
          <p
            className="text-xl leading-relaxed"
            style={{ textAlign: "justify" }}
          >
            Hello, I&apos;m Gabriel Stranziola, a dedicated data scientist and
            developer located in Panama. With a passion for transforming complex
            challenges into actionable insights, I specialize in leveraging data
            to drive informed decision-making and create applications that
            deliver exceptional user experiences.
          </p>
          <p
            className="text-xl mt-4 leading-relaxed"
            style={{ textAlign: "justify" }}
          >
            My expertise encompasses data analytics, web development, and cloud
            technologies, allowing me to approach projects with a comprehensive
            perspective. I am proficient in various programming languages,
            including Python, JavaScript, and SQL, and I continuously seek
            opportunities to harness data insights for strategic business
            growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default KnowMe;
