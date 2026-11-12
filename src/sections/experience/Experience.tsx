import Image from "next/image";
import { Highlight } from "@/components/atoms/highlight/Highlight";
import styles from "./Experience.module.css";

const experiences = [
  {
    company: "Newexer",
    role: "Software Engineer I (SWE-1)",
    from: "July 2025",
    to: "Present",
    logo: "/newexer-logo.png",
    description: [
      <>
        Currently working at Newexer to build a{" "}
        <Highlight>JSX-to-PDF generation library from scratch</Highlight> in
        TypeScript.
      </>,
      <>
        Designed the pipeline for converting JSX into PDFs, applying a
        first-principles approach and selecting appropriate{" "}
        <Highlight>data structures and algorithms</Highlight> to build a clean,
        maintainable system.
      </>,
      <>
        Promoted to <Highlight>Software Engineer I</Highlight> after
        successfully completing a four-month internship.
      </>,
      <>
        Implemented advanced PDF styling features, including{" "}
        <Highlight>
          complex borders, drop shadows, and linear and radial gradients
        </Highlight>{" "}
        during my internship.
      </>,
      <>
        Worked on a <Highlight>font parsing and shaping library</Highlight>,
        handling font processing and text shaping for PDF rendering.
      </>,
      <>
        Implemented <Highlight>image and SVG rendering</Highlight> in PDFs,
        including vector graphics conversion, Google Fonts integration, and font
        subsetting to optimize embedded fonts.
      </>,
    ],
  },
  {
    company: "GydeXP",
    role: "Software Engineering Intern",
    from: "June 2025",
    to: "July 2025",
    logo: "/gydeXpLogo.jpeg",
    description: [
      <>
        Managed the entire backend and took full ownership of building
        microservices for a multi-tenant hotel system.
      </>,
      <>
        Designed scalable database models and integrated third-party APIs like{" "}
        <Highlight>Google Maps Search API</Highlight> and{" "}
        <Highlight>Twilio WhatsApp Business API.</Highlight>
      </>,
      <>
        Worked closely with the frontend team for smooth integration and
        contributed to planning the structure of a WhatsApp AI agent later
        developed.
      </>,
      <>
        Built scalable REST APIs using <Highlight>NestJS</Highlight> and added{" "}
        <Highlight>Swagger</Highlight> for easy integration and clear endpoint
        documentation.
      </>,
    ],
  },
  {
    company: "AsyncAPI",
    role: "Open Source Contributor",
    from: "February 2025",
    to: "June 2025",
    logo: "/asyncapiLogo.png",
    description: [
      <>
        <Highlight>Refactored templates for reusability</Highlight>, added{" "}
        <Highlight>snapshot and unit tests</Highlight>, and improved
        documentation to enhance client generation and developer experience.
      </>,
    ],
  },
  {
    company: "Go Zero to N",
    role: "Full Stack Intern",
    from: "September 2024",
    to: "February 2025",
    logo: "/Go0-nLogo.svg",
    description: [
      <>
        Built a <Highlight>recruiting marketplace</Highlight> for a US-based
        recruiting startup using <Highlight>Next.js</Highlight> and the{" "}
        <Highlight>MERN</Highlight> stack.
      </>,
      <>
        Built{" "}
        <Highlight>
          role-based access portals for clients and recruiters
        </Highlight>{" "}
        for seamless job management and candidate tracking.
      </>,
      <>
        Designed client-facing features to add jobs, track candidates, and
        provide feedback.
      </>,
      <>
        Developed an <Highlight>admin panel (CRM-like)</Highlight> for managing
        clients, jobs, and candidate assignments.
      </>,
      <>
        Added admin functionalities like inviting clients, managing
        jobs/candidates, and sending emails.
      </>,
      <>
        Focused on scalable and secure REST API development for smooth data
        integration.
      </>,
      <>
        Later added a <Highlight>notifications service</Highlight> to update
        clients, recruiters, and admins about job postings, candidate
        submissions, and approvals.
      </>,
    ],
  },
];

export function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <h2 className={styles.heading}>Experience</h2>

      <div className={styles.list}>
        {experiences.map((item) => (
          <article className={styles.item} key={item.company}>
            <div className={styles.companyHeader}>
              <div className={styles.logo}>
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  width={40}
                  height={40}
                />
              </div>

              <div className={styles.companyInfo}>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>

              <span className={styles.duration}>
                {item.from} – {item.to}
              </span>
            </div>

            <ul className={styles.description}>
              {item.description.map((point, index) => (
                <li key={String(index)}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
