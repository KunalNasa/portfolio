import Image from "next/image";
import styles from "./Education.module.css";

export function Education() {
  return (
    <section className={styles.education} id="education">
      <h2 className={styles.heading}>Education</h2>

      <article className={styles.item}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image
              src="/College.jpeg"
              alt="USIC&T logo"
              width={40}
              height={40}
            />
          </div>

          <div className={styles.collegeInfo}>
            <h3>USIC&T</h3>
            <p>Computer Science and Engineering</p>
          </div>

          <span className={styles.duration}>2022 – 2026</span>
        </div>

        <p className={styles.description}>
          Graduated with a degree in Computer Science and Engineering from
          USIC&T in 2026, studying core subjects like Operating Systems,
          Database Management Systems, Computer Networks, and Software
          Development. Gained experience in programming, problem-solving, and
          system design, building a strong foundation in software engineering.{" "}
        </p>
      </article>
    </section>
  );
}
