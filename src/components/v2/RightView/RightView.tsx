import Blogs from "../blogs/Blogs";
import OnThisPage from "./OnThisPage";

export default function RightView() {
  return (
    <div className="md:flex p-2 flex-col hidden w-[25%]">
      <OnThisPage />
      <Blogs/>
    </div> 
  );
}