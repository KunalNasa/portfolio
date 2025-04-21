"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { motion } from "framer-motion"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  icon?: ReactNode
}

export const Button = ({ children, className, icon, variant = "primary", ...props }: ButtonProps) => {

  return (
    <motion.button
    whileHover={{scale:1.005}}
    {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)} // Explicitly cast props to match motion.button's expected type
    className={clsx(
      className, // Ensures user-provided styles take the highest priority
    " border-gray-200 flex gap-2 dark:text-gray-400 text-gray-600 items-center rounded-lg ",
      variant === "primary" && "px-4 text-xs border border-t-gray-500 shadow-inner shadow-gray-400 dark:shadow-gray-700 py-1 dark:text-gray-500 dark:hover:text-white hover:shadow-none text-black hover:bg-gray-800 dark:bg-gray-950 bg-gray-200 border-gray-600 hover:text-white",

      variant === "secondary" && "p-2 text-xl w-full border border-t-gray-500 shadow-inner dark:hover:text-white text-white shadow-gray-400 dark:shadow-gray-700 dark:text-gray-500 hover:shadow-none hover:bg-gray-800 dark:bg-gray-950 bg-gray-800 border-gray-600 hover:text-white",

    )}
    >
        {icon} {children}
    </motion.button>
  );
};
