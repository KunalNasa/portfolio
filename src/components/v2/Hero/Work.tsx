import Accordion from "@/components/Accordion";
import RevealWrapper from "../RevealWrapper";

export default function Work() {
  interface IworkExpList {
    company: string;
    role: string;
    from: string;
    to: string;
    description: string;
    logoSrc: string;
  }
  const workExpList: IworkExpList[] = [
    {
      company: "Newexer",
      role: "Software Engineering Intern",
      from: "July 2025",
      to: "Present",
      description: "Currently working at Newexer to build a JSX-to-PDF generation library from scratch in TypeScript. Responsible for designing a pipeline that converts user’s JSX code into PDF, implementing features from scratch using a first-principles approach, and selecting the right data structures and algorithms to ensure clean and maintainable code.",
      logoSrc: "/newexer-logo.png",

    },
    {
      company: "GydeXP",
      role: "Software Engineering Intern",
      from: "June 2025",
      to: "July 2025",
      description: "Managed the entire backend and took full ownership of building microservices for a multi-tenant hotel system. Designed scalable database models and integrated third-party APIs like Google Maps Search API and Twilio WhatsApp Business API. Worked closely with the frontend team for smooth integration and contributed to planning the structure of a WhatsApp AI agent later developed. Built scalable REST APIs using NestJS and added Swagger for easy integration and clear endpoint documentation.",
      logoSrc: "/gydeXpLogo.jpeg",
    },
    {
      company: "AsyncAPI",
      role: "Open source contributor",
      from: "February 2025",
      to: "June 2025",
      description: "Contributing to the AsyncAPI generator and helping to make Event-Driven Architecture as simple as REST APIs in my own way.",
      logoSrc: "/asyncapiLogo.png",
    },
    {
      company: "Go Zero to N",
      role: "Full Stack Intern",
      from: "September 2024",
      to: "February 2025",
      description: "Built a recruiting marketplace for a US based recruiting startup using Next.js and the MERN stack. Built role-based access portals for clients and recruiters for seamless job management and candidate tracking. Designed client-facing features to add jobs, track candidates, and provide feedback. Developed an admin panel (CRM-like) for managing clients, jobs, and candidate assignments. Added admin functionalities like inviting clients, managing jobs/candidates, and sending emails. Focused on scalable and secure REST API development for smooth data integration. Later add notifications service to update clients, recruiters and admin about latest job posting, candidate submission and candidate approval",
      logoSrc: "/Go0-n.svg"
    },
  ]
  return (
    <div className="my-5" id="v2Work">
      <h2 className="text-xl font-bold mb-3">Work Experience</h2>
      {workExpList.map((item) => (
        <RevealWrapper key={item.company}>
          <Accordion
            company={item.company}
            role={item.role}
            from={item.from}
            to={item.to}
            description={item.description}
            logoSrc={item.logoSrc}
          />
        </RevealWrapper>
      ))}
    </div>
  );
}
