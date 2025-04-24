import Link from "next/link";

const content = [
    {id : "/#v2Skills", name : "Tech Stack"},
    {id : "/#v2Work", name : "Work Experience"},
    {id : "/#v2Education", name : "Education"},
    {id : "/#v2Projects", name : "Projects"},

]
export default function OnThisPage() {
  return (
    <div className="border text-sm md:w-3/4 lg:w-1/2 text-gray-500 mt-10 mb-4 shadow-inner shadow-gray-300 dark:shadow-gray-700 rounded-lg p-5">
        <p className="mb-4 dark:text-gray-300 font-semibold text-lg">On this page</p>
        <div className="flex flex-col gap-2">
            {content.map((item) => (
                <Link key={item.id} className="dark:hover:text-white hover:underline hover:text-black" href={item.id}>{item.name}</Link>
            ))}
        </div>
    </div>
  );
}