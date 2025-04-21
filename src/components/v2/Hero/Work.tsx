import Accordion from "@/components/Accordion";
import RevealWrapper from "../RevealWrapper";

export default function Work() {
  return (
    <div className="my-5">
      <h2 className="text-xl font-bold mb-3">Work Experience</h2>
    <RevealWrapper>

    <Accordion
      company="AsyncAPI"
      role="Open source contributor"
      from="February 2025"
      to="Present"
      description="Contributing to the AsyncAPI generator and helping to make Event-Driven Architecture as simple as REST APIs in my own way."
      logoSrc="/asyncapiLogo.png" 
      />
    </RevealWrapper>
    <RevealWrapper>

      <Accordion
        company="Go Zero to N"
        role="Full Stack Intern"
        from="September 2024"
        to="February 2025"
        description="Built a recruiting marketplace for a US based recruiting startup using Next.js and the MERN stack. Built role-based access portals for clients and recruiters for seamless job management and candidate tracking. Designed client-facing features to add jobs, track candidates, and provide feedback. Developed an admin panel (CRM-like) for managing clients, jobs, and candidate assignments. Added admin functionalities like inviting clients, managing jobs/candidates, and sending emails. Focused on scalable and secure REST API development for smooth data integration. Later add notifications service to update clients, recruiters and admin about latest job posting, candidate submission and candidate approval"
        logoSrc="/Go0-n.svg" 
        />
    </RevealWrapper>
    <RevealWrapper>

      <Accordion
        company="IBM SkillsBuild"
        role="Frontend Intern"
        from="June 2024"
        to="August 2024"
        description="Developed a sustainable development project using the MERN stack, achieving certification
        and demonstrating proficiency in real-world application."
        logoSrc="/ibm.jpg" 
        />
    </RevealWrapper>
      
    </div>
  );
}