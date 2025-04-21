import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

export default function LeftView() {
  return (
    <div className="md:flex flex-col hidden w-[25%]">
      <ThemeToggle />
    </div>
  );
}