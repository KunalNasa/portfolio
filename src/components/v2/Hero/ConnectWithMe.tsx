import { Button } from "@/components/MyUi/Button";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { PiReadCvLogoBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
export default function ConnectWithMe() {
  const socials = [
    { icon: <FaSquareXTwitter />, label: "Twitter", href: "https://x.com/_devkunal" },
    { icon: <CiLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/kunalnasa/", },
    { icon: <FaGithub />, label: "GitHub", href:"https://github.com/KunalNasa/" },
    { icon: <PiReadCvLogoBold />, label: "Resume", href:"https://drive.google.com/file/d/10U4aHp3bbP_ftG8AGHGTw86gfQ-LWF4R/view" },
    { icon: <MdEmail />, label: "Email", href:"mailto:kunalnasa.dev@gmail.com" },

  ];
  return (
    <div className="md:hidden  ">
        <p className="py-3 text-gray-500">You can <span className="dark:text-white text-black">connect</span> with me here:</p>
        <div className="flex flex-wrap items-center gap-5">
          {socials.map((item) => (
            <Link target="_blank" rel="noopener noreferer" key={item.href} href={item.href}><Button icon={item.icon}>{item.label}</Button></Link>
          ))}
        </div>
    </div>
  );
}