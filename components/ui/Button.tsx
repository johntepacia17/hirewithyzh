import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "default" | "large" | "compact";
type ButtonAs = "button" | "a" | "link";

type SharedButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: ButtonAs;
  href?: string;
  external?: boolean;
  className?: string;
};

type ButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-burgundy bg-burgundy text-bone hover:border-burgundy-deep hover:bg-burgundy-deep",
  secondary:
    "border-ink bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-bone"
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-6 py-3 text-sm",
  large: "px-8 py-4 text-base",
  compact: "px-4 py-2 text-sm"
};

export function Button({
  children,
  variant = "primary",
  size = "default",
  as = "button",
  href,
  external = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-[2px] border font-body font-medium tracking-[-0.01em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy",
    variantClasses[variant],
    sizeClasses[size],
    className
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "link" && href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  if ((as === "a" || external) && href) {
    return (
      <a
        {...props}
        className={classes}
        href={href}
        rel={external ? "noopener noreferrer" : props.rel}
        target={external ? "_blank" : props.target}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
