'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiCplusplus, SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoDocker } from "react-icons/io5";

const skills = [
  { name: "Typescript", logo: <SiTypescript /> },
  { name: "C++", logo: <SiCplusplus /> },
  { name: "NextJS", logo: <TbBrandNextjs /> },
  { name: "React", logo: <FaReact /> },
  { name: "Postgres", logo: <BiLogoPostgresql /> },
  { name: "MongoDB", logo: <SiMongodb /> },
  { name: "Docker", logo: <IoLogoDocker /> },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", damping: 18, stiffness: 100 } },
};

export default function Skills() {
  return (
    <div>
    <h4 className="text-xl font-semibold mb-4">Skills</h4>
    <motion.div
    id="v2Skills"
    className="flex items-center flex-wrap gap-3"
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    >
      {skills.map((item) => (
        <motion.div key={item.name} variants={itemVariants}>
          <SkillBlock name={item.name} logo={item.logo} />
        </motion.div>
      ))}
    </motion.div>
    <p className="text-sm text-gray-500 mt-3">This is my most commonly used <span className="text-black dark:text-white">tech stack</span>. Additionally, I can <span className="text-black dark:text-white">quickly adapt to any other tech stack</span>  as well.</p>
      </div>
  );
}

export function SkillBlock({ logo, name }: { logo: ReactNode; name: string }) {
  return (
    <span className="flex items-center gap-2 border shadow-inner shadow-gray-500 dark:bg-gray-200 bg-black/80 dark:text-gray-700 text-xs py-1 px-4 text-white b rounded-md border-gray-500">
      <span>{logo}</span>
      <span>{name}</span>
    </span>
  );
}
