import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
};

export function Button({ icon, className, children, ...props }: ButtonProps) {
  return (
    <button
      className={[styles.button, className].filter(Boolean).join(" ")}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton({ className, children, ...props }: IconButtonProps) {
  return (
    <button
      className={[styles.iconButton, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
