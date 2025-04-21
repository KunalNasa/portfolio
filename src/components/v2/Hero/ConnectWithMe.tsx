import { Button } from "@/components/MyUi/Button";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
export default function ConnectWithMe() {
  return (
    <div className="md:hidden  ">
        <p className="py-3 text-gray-500">You can <span className="dark:text-white text-black">connect</span> with me here:</p>
        <div className="flex items-center gap-5">
            <Button icon={<FaSquareXTwitter/>}> Twitter</Button>
            <Button icon={<CiLinkedin/>}>LinkedIn</Button>
            <Button icon={<FaGithub/>}>Github</Button>
        </div>
    </div>
  );
}