import GithubStats from "@/components/GithubStats";
import { About } from "@/sections/about/About";
import { Education } from "@/sections/education/Education";
import { Experience } from "@/sections/experience/Experience";
import { Header } from "@/sections/header/Header";
import { Links } from "@/sections/links/Links";
import { Projects } from "@/sections/projects/Projects";
import { TechStack } from "@/sections/techStack/TechStack";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <About />
      <Links />
      <GithubStats />
      <TechStack />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
}
