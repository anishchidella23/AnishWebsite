import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Software Engineer • CS + Business
        </h1>
        <p className="max-w-2xl text-slate-600">
          I build full-stack and ML projects with a focus on clean UX and measurable impact.
          Currently seeking software engineering internships.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume (PDF)
          </a>
          <a className="rounded-xl border px-4 py-2 text-sm" href="https://github.com/YOUR_GITHUB" target="_blank">
            GitHub
          </a>
          <a className="rounded-xl border px-4 py-2 text-sm" href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank">
            LinkedIn
          </a>
          <Link className="rounded-xl border px-4 py-2 text-sm" href="/projects">
            View Projects →
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Featured Project</h2>
          <p className="mt-2 text-slate-600">
            BudgetBud — personal budgeting app with category insights + recurring expenses.
          </p>
          <div className="mt-3 flex gap-3 text-sm">
            <Link className="underline" href="/projects">Details</Link>
            <a className="underline" href="#" target="_blank">Demo</a>
            <a className="underline" href="#" target="_blank">Code</a>
          </div>
        </div>

        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">What I’m best at</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600">
            <li>Full-stack apps (React/Next, APIs, DBs)</li>
            <li>Data/ML pipelines (Python, PyTorch)</li>
            <li>Readable code, testing, and performance</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
