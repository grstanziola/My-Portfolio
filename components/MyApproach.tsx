import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const About: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-100 via-gray-500 to-gray">
      {/* Header Section */}
      <header className="w-full py-10">
        <h2 className="text-center text-4xl font-bold">My Approach</h2>
      </header>

      {/* Content Section */}
      <div className="w-full px-8 mt-16">
        <HoverEffect
          items={[
            {
              title: "Insight-Driven Strategy",
              description:
                "Every successful project starts with understanding the problem at its core. I invest time in thoroughly researching the client’s industry, business model, and target audience, leveraging my expertise in data analysis to uncover actionable insights. This enables me to not only meet client expectations but also provide strategic recommendations that drive growth and innovation.",
              link: "",
            },
            {
              title: "Purposeful Design",
              description:
                "Design is about solving problems and delivering value, not just creating visually appealing interfaces. I combine a data-centric approach with user experience (UX) best practices to develop web applications that are functional, user-friendly, and optimized for performance. My goal is to design solutions that enhance user engagement and deliver measurable results for the business.",
              link: "",
            },
            {
              title: "High-Impact Development",
              description:
                "With a strong foundation in web development and data science, I build tailored, scalable solutions that integrate cutting-edge technology and analytics. I focus on creating web applications that go beyond aesthetics, delivering performance-driven, data-powered tools that empower clients to make informed decisions and achieve sustainable success. My expertise ensures that every solution is not only technically sound but also aligned with the client’s long-term business goals.",
              link: "",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default About;
