import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "glass" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,box-shadow,color,transform] duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover hover:shadow-glow",
  glass: "glass text-foreground hover:bg-white/10",
  ghost: "text-muted hover:text-foreground",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

type StyleProps = { variant?: Variant; size?: Size; className?: string };

function styles({ variant = "primary", size = "md", className = "" }: StyleProps) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

export function Button({
  variant,
  size,
  className,
  ...props
}: StyleProps & Omit<ComponentProps<"button">, "className">) {
  return <button type="button" {...props} className={styles({ variant, size, className })} />;
}

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: StyleProps & Omit<ComponentProps<typeof Link>, "className">) {
  return <Link {...props} className={styles({ variant, size, className })} />;
}
