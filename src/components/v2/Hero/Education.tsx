import Accordion from "@/components/Accordion";

export default function Education() {
  return (
    <div className="my-5" id="v2Education">
      <h2 className="text-xl font-bold mb-3">Education</h2>
      <Accordion
        company="USIC&T"
        role="Computer Science and Engineering"
        from="2022"
        to="2026"
        description="Pursuing a degree in Computer Science and Engineering from USIC&T, focusing on core subjects like Operating Systems, Database Management Systems, Computer Networks, and Software Development. Gaining hands-on experience in programming, problem-solving, and system design to build a strong foundation for a career in technology."
        logoSrc="/College.jpeg" 
      />
    </div>
  );
}