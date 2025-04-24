import Link from "next/link";
import { FaHeart } from "react-icons/fa";
export default function EOF() {
  return (
    <div className="text-gray-500 mt-2 text-sm">
      <p className="flex items-center gap-2">Designed and Developed with  <FaHeart/></p>
    <p>Missing Old Portfolio? <Link className="underline text-black dark:text-white" href='/v1' target="_blank" rel="noopener noreferrer">Click here</Link></p>

    </div>
  );
}