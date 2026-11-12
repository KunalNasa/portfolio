import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "./Header.module.css";

const navigation = [
  { label: "[ Tech Stack ]", href: "#tech-stack" },
  { label: "[ Experience ]", href: "#experience" },
  { label: "[ Education ]", href: "#education" },
  { label: "[ Projects ]", href: "#projects" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div>
          <div className={styles.greetingRow}>
            <p className={styles.greeting}>Hey, it's me</p>
            <ThemeToggle />
          </div>

          <h1 className={styles.heading}>
            Kunal Nasa{" "}
            <span className={styles.social}>
              <Link
                href="https://x.com/_devkunal"
                target="_blank"
                rel="noopener noreferrer"
              >
                /@_devkunal
              </Link>
            </span>
          </h1>
        </div>

        <div className={styles.avatar}>
          <Image
            src="/itsme.png"
            alt="Kunal Nasa"
            width={80}
            height={80}
            priority
          />
        </div>
      </div>

      <nav className={styles.navigation}>
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
