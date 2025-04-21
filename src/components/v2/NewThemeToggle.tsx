"use client";
import {motion} from "framer-motion"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { Button } from "../MyUi/Button";

const NewThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.button
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className=" rounded-lg  text-xl border border-t-gray-500 shadow-inner shadow-gray-400 dark:shadow-gray-700 p-2 dark:text-gray-500 dark:hover:text-white hover:shadow-none hover:bg-gray-800 dark:bg-gray-950 text-white bg-gray-800 border-gray-600 hover:text-white"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}

    >
      {theme === "light" ? <FaSun  /> : <BsMoonStarsFill />}
    </motion.button>

  );
};

export default NewThemeToggle;
