import { Button } from "@/components/MyUi/Button";
import { IoBriefcase } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
export default function AvailableForHire() {
  return (
    <div className="flex items-center gap-4 my-5">
      <Link href="https://twitter.com/messages/compose?recipient_id=1906166452878811136" target="_blank" rel="noopener noreferrer">
        <Button icon={<IoBriefcase/>}>Available for hire</Button>
      </Link>
        <span className="text-gray-500">or</span>
        <Link target="_blank" rel="noopener noreferrer" href='mailto:kunalnasa.dev@gmail.com'>
          <Button icon={<MdEmail/>}>Email Me</Button>
        </Link>
    </div>
   
  );
}