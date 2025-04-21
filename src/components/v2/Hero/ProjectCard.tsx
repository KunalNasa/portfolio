import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGlobeAmericas } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

type props = {
  image: string,
  title: string,
  description: string,
  website?: string,
  github?: string,
  techstack: string[]
}
const ProjectCard = ({ image, title, description, website, github, techstack }: props) => {
  return (
    <div className="sm:w-[48%] w-full bg-white dark:bg-black rounded-xl  mx-auto border border-gray-300 dark:border-gray-700">
      <div className="h-auto hover:scale-95 hover:rounded-b-xl w-full rounded-t-xl overflow-hidden transition-transform duration-500 ease-in-out">
        <Image
          className="object-cover hover:rounded-b-xl"
          src={image}
          alt="Image"
          width={400}
          height={300}
        />
      </div>
      <Separator />
      <div className='flex flex-col py-4 p-2 w-full'>
        <h4 className='text-xl dark:text-gray-300 mb-3 font-semibold'>{title}</h4>
        <p className='text-xs text-gray-500'>{description}</p>
      </div>
      <div className='Techstack text-sm p-2 flex flex-wrap gap-3'>
        {techstack.map((item, index) => (
          <p className='text-xs dark:bg-gray-200 bg-gray-900 border shadow-inner text-gray-200 dark:shadow-gray-300 border-gray-500 dark:text-gray-500 rounded-sm px-2' key={index}>{item}</p>
        ))}
      </div>
      <div className='p-2 mt-2 flex gap-3'>
        {website && <Badge> <Link className='flex gap-1 items-center' href={website}><span><FaGlobeAmericas /></span>Website</Link> </Badge>}
        {github &&
          <Badge>
            <Link className='flex gap-1 items-center' href={github}><span><FaGithub /></span>Repository</Link>
          </Badge>}
      </div>
    </div>

  )
}

export default ProjectCard
