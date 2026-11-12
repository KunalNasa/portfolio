import {
  IconBrandGithub,
  IconCode,
  IconExternalLink,
} from "@tabler/icons-react";
import Link from "next/link";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.heading}>Projects</h2>

      <div className={styles.list}>
        {projects.map((project) => (
          <article className={styles.item} key={project.title}>
            <div className={styles.projectHeader}>
              <IconCode size={20} stroke={1.8} />
              <h3>{project.title}</h3>
            </div>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.techStack}>
              {project.techstack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className={styles.links}>
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconExternalLink size={15} />
                  Website
                </Link>
              )}

              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGithub size={15} />
                  Repository
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    imageUrl: "/Images/SkillForgeLogo.png",
    title: "SkillForge",
    liveUrl: "https://skillforge.kunalnasa.work/",
    description:
      "AI-powered tool for generating personalized learning roadmaps with progress tracking.",
    githubUrl: "https://github.com/KunalNasa/skillforge",
    techstack: ["MongoDB", "Next.js", "Zod", "Gemini", "Tailwind CSS"],
  },
  {
    imageUrl: "/Images/slates.jpeg",
    title: "Slates",
    description:
      "Real-time collaborative canvas board with feature of zooming, panning and more.",
    githubUrl: "https://github.com/KunalNasa/slates",
    techstack: [
      "Postgres",
      "Next.js",
      "Express.js",
      "Zod",
      "Web sockets",
      "BullMQ",
      "Redis",
      "Turborepo",
    ],
  },
  {
    imageUrl: "/Images/wiseupNew.jpeg",
    title: "WiseUp",
    liveUrl: "https://wiseup.kunalnasa.work",
    description:
      "SaaS app for managing monthly transactions and visualizing spending through charts.",
    githubUrl: "https://github.com/KunalNasa/WiseUp",
    techstack: [
      "PostgreSQL",
      "Next.js",
      "Zod",
      "Clerk",
      "Tailwind CSS",
      "Stripe",
      "Web-hooks",
    ],
  },
];
