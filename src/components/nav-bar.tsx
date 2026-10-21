import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Wordmark } from "@/components/wordmark";

const links = [
  { href: "/marketplace", label: "Marketplace" },
  { href: "/#how-it-works", label: "How it works" },
];

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <nav
        aria-label="Main"
        className="glass grid w-full max-w-3xl grid-cols-[1fr_auto_1fr] items-center rounded-full px-4 py-2.5"
      >
        <ul className="hidden items-center gap-2 justify-self-start md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo sits in the exact center column */}
        <div className="col-start-2 px-4">
          <Wordmark />
        </div>

        <div className="col-start-3 flex items-center gap-2 justify-self-end">
          <ButtonLink href="/sign-in" variant="ghost" className="hidden md:inline-flex">
            Sign in
          </ButtonLink>
          <ButtonLink href="/sell">Start selling</ButtonLink>
        </div>
      </nav>
    </header>
  );
}
