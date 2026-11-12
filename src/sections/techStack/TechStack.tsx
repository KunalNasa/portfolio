import {
  IconBrandDocker,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandRust,
  IconBrandTypescript,
  IconDatabaseCog,
} from "@tabler/icons-react";
import styles from "./TechStack.module.css";

const technologies = [
  { name: "TypeScript", icon: IconBrandTypescript },
  { name: "Next.js", icon: IconBrandNextjs },
  { name: "React", icon: IconBrandReact },
  { name: "Rust", icon: IconBrandRust },
  { name: "PostgreSQL", icon: IconDatabaseCog },
  { name: "Docker", icon: IconBrandDocker },
];

export function TechStack() {
  return (
    <section className={styles.techStack} id="tech-stack">
      <h2 className={styles.heading}>Tech Stack</h2>

      <div className={styles.tiles}>
        {technologies.map(({ name, icon: Icon }) => (
          <span key={name} className={styles.tile}>
            <Icon size={16} stroke={1.8} />
            <span>{name}</span>
          </span>
        ))}
      </div>

      <p className={styles.description}>
        I can quickly adapt to different tech stacks and am always eager to
        learn new technologies and explore unfamiliar things.
      </p>
    </section>
  );
}
