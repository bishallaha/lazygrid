import type { Metadata, Viewport } from "next";
import { Fira_Code, Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code", display: "swap" });
// Stand-in for the "Laren" brand font until it is licensed (see docs).
const brandFace = Outfit({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-brand-face",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "lazygrid", template: "%s | lazygrid" },
  description: "One grid for every digital asset. A marketplace for creators.",
};

export const viewport: Viewport = {
  themeColor: "#121212",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} ${brandFace.variable}`}>
      {/* suppressHydrationWarning: browser extensions inject attributes into <body> */}
      <body className="font-sans antialiased" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
