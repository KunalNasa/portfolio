import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutMe() {
  return (
    <div>
      <p className="text-sm text-gray-500">Hey it's me</p>
      <h1 className="font-skillscreen mb-4 text-3xl">Kunal Nasa <span className="text-gray-500 font-sans text-lg">/@_devkunal</span></h1>

      <div className="flex items-start gap-5">
      <p className="text-gray-500">
        I'm a <span className="text-black dark:text-white">full-stack developer</span> who enjoys building web apps, especially ones that follow <span className="text-black dark:text-white">event-driven architecture</span>. I like figuring things out from scratch instead of relying too much on libraries—it's how I learn best. I’ve also been <span className="text-black dark:text-white">contributing to open source</span>, which has helped me understand how <span className="text-black dark:text-white">real-world systems</span> work and connect with people working on interesting problems.

        <br /><br />
        Right now, I’m looking for <span className="text-black dark:text-white">opportunities</span> to work on real projects and get hands-on <span className="text-black dark:text-white">industry experience</span>.
      </p>
        <Avatar>
          <AvatarImage src="itsme.jpg" alt="@shadcn" />
          <AvatarFallback>KN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}