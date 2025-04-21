import { Button } from "@/components/MyUi/Button";
import { IoBriefcase } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import RevealWrapper from "../RevealWrapper";
export default function AvailableForHire() {
  return (
    <div className="flex items-center gap-4 my-5">
        <Button icon={<IoBriefcase/>}>Available for hire</Button>
        <span className="text-gray-500">or</span>
        <Button icon={<MdEmail/>}>Email Me</Button>
    </div>
   
  );
}