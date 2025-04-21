import { Button } from "@/components/MyUi/Button";
import AboutMe from "./AboutMe";
import GithubStats from "./GithubStats";
import { IoBriefcase } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
export default function Hero() {
  return (
    <div className="w-[50%] flex flex-col gap-2 my-5">
      <AboutMe/>
      <GithubStats/>
      <div className="flex items-center gap-4">
        <Button icon={<IoBriefcase/>}>Available for hire</Button>
        <span>or</span>
        <Button icon={<MdEmail/>}>Email Me</Button>
      </div>
    </div>
  );
}