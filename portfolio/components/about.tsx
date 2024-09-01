"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-26 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      After completing my studies in{" "}
        <span className="font-medium">BSc. CSIT </span>and completing several frontend projects using React.js,
        I’ve gained valuable experience in building user-friendly interfaces and 
        deploying them on platforms like{" "}<span className="font-medium">Microsoft Azure.</span>
        I enjoy turning design concepts into functional, responsive websites and am eager to further develop my skills. 
        I’m currently seeking a remote or full-time position where 
        I can continue to learn and contribute to innovative projects.
      </p>
    </motion.section>
  );
}
