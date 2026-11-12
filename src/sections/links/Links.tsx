"use client";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconCheck,
  IconFileText,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
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
];

export function Links() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("kunalnasa.dev@gmail.com");
      setCopied(true);
    } catch {
      setCopied(false);
    } finally {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <section className={styles.links}>
      <h2>Links & Contact</h2>

      <div className={styles.list}>
        {links.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className={buttonStyles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={18} stroke={1.8} />
            {label}
          </Link>
        ))}

        <button
          type="button"
          className={buttonStyles.button}
          onClick={copyEmail}
          aria-live="polite"
        >
          {copied ? (
            <IconCheck size={18} stroke={1.8} />
          ) : (
            <IconMail size={18} stroke={1.8} />
          )}
          {copied ? "Email copied!" : "Copy email"}
        </button>
      </div>
    </section>
  );
}
