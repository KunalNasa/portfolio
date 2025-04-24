import Blogs from "./Blogs";

export default function MobileBlogs() {
  return (
    <div className="md:hidden flex flex-col">
        <Blogs/>
    </div>
  );
}