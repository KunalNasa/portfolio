import { Highlight } from "@/components/atoms/highlight/Highlight";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.about} id="about">
      <p>
        I'm a Software Engineer who enjoys building software systems from
        scratch and understanding how things work under the hood.
        <br />
        <br />
        At work, I've been involved in building a{" "}
        <Highlight>JSX-to-PDF system</Highlight>, which includes developing a
        CSS parsing and layout engine, PDF rendering pipelines, and SVG-to-PDF
        vector rendering and much more. I've also worked on a{" "}
        <Highlight>font parsing and shaping library</Highlight>, exploring the
        intricacies of font formats and text processing.
        <br />
        <br />I enjoy working on problems that require going beyond existing
        abstractions and understanding the fundamentals behind them. Outside
        work, I'm <Highlight>learning Rust</Highlight> to explore low-level
        programming, deepen my understanding of systems, and work towards
        solving more complex backend problems.
      </p>
    </section>
  );
};
