// components/Home.tsx

import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { HoverEffect } from "./ui/card-hover-effect";
import { GlareCard } from "@/components/ui/glare-card";
import ContactForm from "@/components/ContactMe";

export function TimelineDemo() {
  const data = [
    {
      title: "Who I Am",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8"
            style={{ textAlign: "justify" }}
          >
            Hello, I&#39;m Gabriel Stranziola, a dedicated data scientist and
            developer from Panama. With a passion for transforming complex
            challenges into actionable insights, I specialize in leveraging data
            to drive informed decision-making and create applications that
            deliver exceptional user experiences.
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8"
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
      ),
    },
    {
      title: "My Approach",
      content: (
        <div className="px-8">
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
            className="text-lg text-justify"
          />
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            A collection of my recent works:
          </p>
          <div className="grid grid-cols-2 gap-4">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <GlareCard
                  key={index}
                  className="relative flex flex-col items-center justify-center"
                >
                  <Image
                    className="h-full w-full absolute inset-0 object-cover"
                    src="/images/tema1.avif"
                    alt="Background"
                    layout="fill"
                  />
                  <div className="relative z-10 text-center">
                    <p className="font-bold text-white text-lg">
                      {index === 3 ? "more projects..." : "coming soon..."}
                    </p>
                  </div>
                </GlareCard>
              ))}
          </div>
        </div>
      ),
    },
    {
      title: "Contact Me",
      content: (
        <div>
          <ContactForm />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
