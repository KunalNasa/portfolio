import React from 'react'
import { FaGithub } from "react-icons/fa";
import { projects } from '@/helpers/Project'
import Link from 'next/link'
import ProjectCard from './ProjectCard'
import { Button } from '@/components/MyUi/Button'

const MyProjects = () => {
  return (
    <div id='v2Projects' className='w-full flex flex-col'>
    <h3 className='text-xl mb-5 font-semibold pt-5'>Some Of My Recent Work</h3>
      <div className="flex flex-wrap gap-2">
        {projects.map((project, index) => index < 4 && (
            <ProjectCard
              key={index}
              website={project.liveUrl ? project.liveUrl : undefined}
              image={project.imageUrl}
              title={project.title}
              description={project.description}
              github={project.githubUrl}
              techstack={project.techstack}
              />
            ))}
    </div>
    <p className='text-sm mt-4 flex md:flex-row flex-col items-center gap-3 text-gray-500 mb-2'>These are few projects I've worked on recently. Want to see more? Visit <Link target='_blank' rel="noopener noreferrer" href="https://github.com/KunalNasa" className="dark:text-white text-black"><Button icon={<FaGithub/>}>My Github</Button></Link></p>
    </div>
  )
}

export default MyProjects
