"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <>
      {/* Background container */}
      <div className="min-h-screen w-full bg-gradient-to-r from-gray-100 via-gray-500 to-gray">
        {/* Optional subtle noise texture overlay for a cool minimalist effect */}
        <div className="absolute inset-0 bg-[url('/images/noise-texture.png')] opacity-10"></div>

        {/* Title Section with extra padding at the top */}
        <div className="relative w-full flex flex-col items-center justify-center space-y-8 pt-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white transparent bg-clip-text bg-gradient-to-r from-black-400 via-black-500 to-black-500">
            Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            A collection of my recent works.
          </p>
        </div>

        {/* Project Container Section */}
        <div className="relative w-full flex items-center justify-center mt-12 space-x-8">
          <PinContainer title="Project 1" href="https://gabrielstanziola.com/">
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs pb-2 font-bold text-base text-slate-100">
                Project
              </h3>
              <div className="text-base font-normal">
                <span className="text-slate-500">Example of project.</span>
              </div>
              <div className="flex-1 w-full rounded-lg mt-4 bg-gradient-to-r from-gray-100 via-gray-500 to-gray" />
            </div>
          </PinContainer>

          <PinContainer title="Project 2" href="https://gabrielstanziola.com/">
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs pb-2 font-bold text-base text-slate-100">
                Project 1
              </h3>
              <div className="text-base font-normal">
                <span className="text-slate-500">example of project 1.</span>
              </div>
              <div className="flex-1 w-full rounded-lg mt-4 bg-gradient-to-r from-gray-100 via-gray-500 to-gray" />
            </div>
          </PinContainer>

          <PinContainer title="Project 3" href="https://gabrielstanziola.com/">
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs pb-2 font-bold text-base text-slate-100">
                project 2
              </h3>
              <div className="text-base font-normal">
                <span className="text-slate-500">Example of project 2.</span>
              </div>
              <div className="flex-1 w-full rounded-lg mt-4 bg-gradient-to-r from-gray-100 via-gray-500 to-gray" />
            </div>
          </PinContainer>
        </div>
      </div>
    </>
  );
}

export default AnimatedPinDemo;
