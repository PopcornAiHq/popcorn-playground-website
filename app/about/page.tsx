import Link from "next/link";
import Image from "next/image";
import PageFooter from "../components/PageFooter";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#FFFDF8] text-[#1a1a1a] flex flex-col">
      <nav className="flex items-center justify-between px-10 py-6">
        <Link href="/">
          <Image alt="Popcorn" src="/popcorn-logo.svg" width={133} height={50} className="block" style={{ filter: "brightness(0)" }} />
        </Link>
        <button
          className="bg-black text-white px-7 py-3.5 rounded-[12px] text-base font-medium hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          GET SETUP
        </button>
      </nav>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 pt-16 sm:pt-24 md:pt-32 pb-20 lg:pb-8 flex-1">
        <article className="max-w-[900px] mx-auto">
          <h1
            className="text-[36px] sm:text-[48px] md:text-[72px] leading-[0.92] tracking-tight mb-6 sm:mb-8 md:mb-12"
            style={{ fontFamily: "var(--font-synt)" }}
          >
            About the team
          </h1>

          <div className="space-y-4 sm:space-y-6 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed" style={{ fontFamily: "var(--font-albert-sans)" }}>
            <p>
              Scaling with AI is no different than scaling with people: as teams grow, communication gets louder, messier, and more overwhelming. It&apos;s the natural byproduct of many humans working toward something ambitious.
            </p>
            <p>
              The mistake most tools make today is assuming that the solution is <em>less</em> communication. If we compress, summarize, or shrink the details inside team conversations, we&apos;re removing the very context people need to make good decisions and do good work. We&apos;ve seen what happens when AI is stripped of context and it performs worse. Humans will struggle even more.
            </p>
            <p>
              We believe <strong>communication is the heartbeat of every company</strong>. In the world ahead, messaging won&apos;t just be where teams talk; it will be the main interface where all humans and agents do their best work together.
            </p>
            <p>
              We&apos;ve spent decades building collaboration and communication products at companies, like Slack, Quip (the productivity software, not the toothbrush), Instagram, Pinterest, Roblox, and Character.ai. We&apos;re a hybrid team, based out of San Francisco and hiring people who want to define what messaging looks like when humans and AI talk at scale. If that&apos;s you, <a href="mailto:jobs@popcorn.ai" className="underline hover:opacity-70">let&apos;s talk</a>.
            </p>
          </div>
        </article>
      </div>

      <PageFooter />
    </main>
  );
}
