import Hero from "@/components/v2/Hero/Hero";
import LeftView from "@/components/v2/LeftView/LeftView";
import RightView from "@/components/v2/RightView/RightView";

export default function page() {
  return (
    <div className="w-full flex">
      <LeftView />
      <Hero />
      <RightView />
    </div>
  );
}