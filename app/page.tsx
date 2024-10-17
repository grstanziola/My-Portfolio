"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/welcome";
import Projects from "@/components/Projects";
import About from "@/components/MyApproach";
import KnowMe from "@/components/KnowMe";
import Content from "@/components/Content";
import { TimelineDemo } from "@/components/Home";

const page = () => {
  return (
    <div>
      <TimelineDemo />
      {/* <Welcome />*/}
      {/* <Content />*/}
      {/* <KnowMe />*/}

      {/*<About /> */}
      {/*<Projects /> */}

      {/*<Navbar />*/}
    </div>
  );
};

export default page;
