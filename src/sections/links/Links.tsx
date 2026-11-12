import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileText,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import buttonStyles from "@/components/atoms/button/Button.module.css";
import styles from "./Links.module.css";

const links = [
  { label: "X (Twitter)", href: "https://x.com/_devkunal", icon: IconBrandX },
  {
    label: "GitHub",
    href: "https://github.com/KunalNasa/",
    icon: IconBrandGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kunalnasa/",
    icon: IconBrandLinkedin,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1JwkZhn5o_liLmY0dx5kochqby3hNezy5/view?usp=sharing",
    icon: IconFileText,
  },
  {
    label: "Email",
    href: "mailto:kunalnasa.dev@gmail.com",
    icon: IconMail,
  },
];

export function Links() {
  return (
    <section className={styles.links}>
      <h2>Links & Contact</h2>

      <div className={styles.list}>
        {links.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className={buttonStyles.button}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            <Icon size={18} stroke={1.8} />
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
