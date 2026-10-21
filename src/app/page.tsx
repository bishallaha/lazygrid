import { AssetShowcase } from "@/components/asset-showcase";
import { ButtonLink } from "@/components/button";
import { NavBar } from "@/components/nav-bar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main
        id="main"
        className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col items-center px-6 pt-48 pb-32 text-center"
      >
        <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.02em] text-balance md:text-7xl md:leading-[1.05]">
          One Grid for Every Digital Asset.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-muted">
          Sell game assets, art, templates, source code, AI agents and more, all in one place.
        </p>

        <div className="mt-12">
          <ButtonLink href="/marketplace" size="lg">
            Explore the marketplace
          </ButtonLink>
        </div>

        <div className="mt-24 w-full">
          <AssetShowcase />
        </div>
      </main>
    </>
  );
}
