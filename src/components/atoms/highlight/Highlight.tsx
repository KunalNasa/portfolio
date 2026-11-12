import styles from "./Highlight.module.css";

type HighlightProps = {
  children: React.ReactNode;
};

export function Highlight({ children }: HighlightProps) {
  return <span className={styles.highlight}>{children}</span>;
}
