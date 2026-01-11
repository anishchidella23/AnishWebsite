const projects = [
    {
      name: "BudgetBud",
      tagline: "Personal finance / budgeting app",
      bullets: [
        "Built budgeting flows: categories, recurring expenses, insights dashboard.",
        "Improved UX with accessibility + mobile-first layouts.",
        "Add a metric here (e.g., tested with N users, reduced load time by X%).",
      ],
      tags: ["React Native", "TypeScript", "Firebase"],
      links: { demo: "#", code: "#" },
    },
    {
      name: "Professor Review Sentiment",
      tagline: "NLP classification pipeline",
      bullets: [
        "Fine-tuned a Transformer model for sentiment prediction.",
        "Evaluated with F1/precision/recall + confusion matrix.",
        "Add a metric here (e.g., F1=0.84 on validation).",
      ],
      tags: ["Python", "PyTorch", "Transformers"],
      links: { code: "#" },
    },
  ];
  
  export default function ProjectsPage() {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="max-w-2xl text-slate-600">
          A selection of projects I’ve built. Each includes what I did and the impact.
        </p>
  
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} className="rounded-2xl border p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">{p.name}</h2>
                  <p className="text-sm text-slate-600">{p.tagline}</p>
                </div>
                <div className="flex gap-3 text-sm">
                  {p.links.demo && <a className="underline" href={p.links.demo} target="_blank">Demo</a>}
                  {p.links.code && <a className="underline" href={p.links.code} target="_blank">Code</a>}
                </div>
              </div>
  
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                {p.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
  
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border px-3 py-1 text-xs text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }
  