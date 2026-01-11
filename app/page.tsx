import Link from "next/link";
import Reveal from "@/components/Reveal";

function GlassCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur-xl dark:bg-white/5">
      <div className="text-sm font-semibold tracking-tight">{title}</div>
      <div className="mt-2 text-sm text-black/70 dark:text-white/70">{children}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Reveal>
        <section className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/60 px-3 py-1.5 text-xs text-black/70 shadow-sm backdrop-blur dark:bg-white/5 dark:text-white/70">
            <span className="h-2 w-2 rounded-full bg-[rgb(var(--accent))] shadow-[0_0_20px_rgba(var(--glow),0.45)]" />
            Motion + Glass • Red/Black • Built with Next.js
          </div>

          <h1 className="text-5xl font-semibold tracking-tight">
            Anish Chidella
          </h1>

          <p className="max-w-2xl text-black/70 dark:text-white/70">
            I build full-stack systems, real-time apps, and projects that feel alive.
            Here’s a curated set of what I’ve built and what I’m exploring next.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              className="rounded-2xl bg-[rgb(var(--accent))] px-4 py-2 text-sm font-medium text-white shadow-[0_0_35px_rgba(var(--glow),0.18)] transition hover:opacity-95"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>

            <a
              className="rounded-2xl border border-white/10 bg-white/60 px-4 py-2 text-sm text-black/80 backdrop-blur transition hover:bg-white/80 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
              href="https://github.com/anishchidella23"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="rounded-2xl border border-white/10 bg-white/60 px-4 py-2 text-sm text-black/80 backdrop-blur transition hover:bg-white/80 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
              href="https://www.linkedin.com/in/anish-chidella/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <Link
              className="rounded-2xl border border-white/10 bg-white/60 px-4 py-2 text-sm text-black/80 backdrop-blur transition hover:bg-white/80 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
              href="/projects"
            >
              Explore Projects →
            </Link>
          </div>
        </section>
      </Reveal>

      <section className="grid gap-4 md:grid-cols-2">
        <Reveal delay={0.08}>
          <GlassCard title="Featured">
            Jiggy — a real-time computer vision dance evaluator that gives live accuracy feedback.
          </GlassCard>
        </Reveal>

        <Reveal delay={0.16}>
          <GlassCard title="What I like building">
            Fast UIs, real-time interactions, and systems where you can actually feel the performance.
          </GlassCard>
        </Reveal>
      </section>

      <Reveal delay={0.22}>
        <div className="rounded-3xl border border-white/10 bg-white/60 p-6 backdrop-blur-xl dark:bg-white/5">
          <div className="text-sm font-semibold tracking-tight">Now</div>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">
            I’m currently leveling up: smoother motion design, more interactive project pages,
            and some “playground” experiments (visuals + micro-interactions).
          </p>
        </div>
      </Reveal>
    </div>
  );
}
