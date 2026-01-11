import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Anish Chidella
        </h1>

        <p className="text-lg text-slate-600">
          Software Engineer • Computer Science @ University of Maryland
        </p>

        <p className="max-w-2xl text-slate-600">
          Software engineering intern with experience building scalable full-stack
          and real-time systems. Previously interned at Fiserv and early-stage
          startups, working across React, Spring Boot, distributed APIs, and
          computer vision.
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          <a
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white"
            href="/resume.pdf"
            target="_blank"
          >
            Resume (PDF)
          </a>
          <a
            className="rounded-xl border px-4 py-2 text-sm"
            href="https://github.com/anishchidella23"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="rounded-xl border px-4 py-2 text-sm"
            href="https://www.linkedin.com/in/anish-chidella/"
            target="_blank"
          >
            LinkedIn
          </a>
          <Link
            className="rounded-xl border px-4 py-2 text-sm"
            href="/projects"
          >
            View Projects →
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Featured Project</h2>
          <p className="mt-2 text-slate-600">
            Jiggy — a real-time computer vision platform that evaluates dance
            movements and provides live accuracy feedback.
          </p>
          <div className="mt-3 flex gap-3 text-sm">
            <Link className="underline" href="/projects">
              Details
            </Link>
            <a className="underline" href="https://github.com/anishchidella23">
              Code
            </a>
          </div>
        </div>

        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Core Strengths</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600">
            <li>Full-stack development (React, APIs, databases)</li>
            <li>Real-time systems & distributed workflows</li>
            <li>Computer vision, ML, and performance optimization</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
