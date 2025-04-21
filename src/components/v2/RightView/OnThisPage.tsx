import Link from "next/link";

const content = [
    {id : "/#v2Skills", name : "Tech Stack"},
    {id : "/#v2Work", name : "Work Experience"},
    {id : "/#v2Education", name : "Education"},
    {id : "/#v2Projects", name : "Projects"},

]
export default function OnThisPage() {
  return (
    <div className="text-sm text-gray-500 mt-10 mb-4 p-3">
        <div className="border shadow-inner shadow-gray-300 dark:shadow-gray-700 rounded-lg p-5">
            <p className="mb-4 text-[18px]">On this page</p>
            <div className="flex flex-col gap-2">
                {content.map((item) => (
                    <Link className="dark:hover:text-white hover:underline hover:text-black" href={item.id}>{item.name}</Link>
                ))}

            </div>
        </div>
    </div>
  );
}