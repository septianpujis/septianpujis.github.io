"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Project = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const firstParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const secondParallax = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const thirdParallax = useTransform(scrollYProgress, [0, 1], [0, 250]);
  return (
    <section
      className="border-2 border-secondary h-[1000px] overflow-hidden"
      ref={sectionRef}
    >
      <div>PROJECT</div>
      <div className="wrapper relative w-full h-full">
        <ProjectItem speed={firstParallax} />
        <ProjectItem speed={secondParallax} top={`180px`} left={`10%`} />
        <ProjectItem speed={thirdParallax} top={`360px`} left={`20%`} />
      </div>
    </section>
  );
};

const ProjectItem = ({ top = `0px`, left = `0px`, speed, z = 1 }) => {
  return (
    <motion.div
      style={{ y: speed, top: `${top}`, left: `${left}`, zIndex: z }}
      className={`absolute w-36 h-40 border-2 border-neutral shadow-xl`}
    >
      Project 1
    </motion.div>
  );
};
