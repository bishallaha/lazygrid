import Link from "next/link";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="lazygrid home"
      className={`font-brand text-xl font-semibold tracking-tight text-foreground lowercase ${className}`}
    >
      lazy<span className="text-primary">grid</span>
    </Link>
  );
}
