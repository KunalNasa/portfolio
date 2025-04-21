"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { motion } from "framer-motion"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
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
    "px-4 py-1 border-gray-200 flex gap-2 dark:text-gray-400 text-gray-600 items-center rounded-lg text-sm",
      variant === "primary" && "px-4 border border-t-gray-500 shadow-inner shadow-gray-400 dark:shadow-gray-600 py-1 text-white hover:shadow-none hover:bg-gray-800 dark:bg-gray-950 bg-gray-200 border-gray-600 hover:text-white",


      variant === "secondary" && "px-4 hover:border-t-2 hover:shadow-inner hover:border-white  py-1 bg-none text-gray-600 hover:shadow-violet-400 hover:bg-gray-500 hover:text-white",

    )}
    >
        <span>{icon}</span>
      {children}
    </motion.button>
  );
};
