'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/MyUi/Button";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiReadCvLogoBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import NewThemeToggle from "../NewThemeToggle";
import Link from "next/link";

const socials = [
  { icon: <FaSquareXTwitter />, label: "Twitter", href: "https://x.com/_devkunal" },
  { icon: <CiLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/kunalnasa/", },
  { icon: <FaGithub />, label: "GitHub", href:"https://github.com/KunalNasa/" },
  { icon: <PiReadCvLogoBold />, label: "Resume", href:"https://drive.google.com/file/d/10U4aHp3bbP_ftG8AGHGTw86gfQ-LWF4R/view" },
  { icon: <MdEmail />, label: "Email", href:"mailto:kunalnasa.dev@gmail.com" },

];

export default function Socials() {

  return (
    <div className="my-5 gap-4 justify-end p-2 w-1/2 text-gray-500 text-sm  flex flex-col items-end">
      {/* <p className="text-center">Check these links if you want to</p> */}
      <div className="flex flex-col gap-5 bg-gray-100 border dark:bg-gray-950/20 p-2 rounded-lg py-4 items-end justify-end">
        {socials.map((social, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-fit"
          >
            <Link target="_blank" rel="noopener noreferrer"  href={social.href}>
                <Button variant="secondary" icon={social.icon}></Button>
            </Link>
          </motion.div>
        ))}
      <NewThemeToggle />
      </div>
    </div>
  );
}
