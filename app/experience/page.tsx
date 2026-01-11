const experience = [
    {
      title: "Role — Company",
      time: "Month YYYY – Month YYYY",
      bullets: [
        "Impact bullet (what you shipped + result).",
        "Tech + scale (users, latency, revenue, etc.).",
      ],
    },
    {
      title: "Leadership — Club/Org",
      time: "Month YYYY – Month YYYY",
      bullets: ["Led X; achieved Y; organized Z."],
    },
  ];
  
  export default function ExperiencePage() {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
        <div className="space-y-4">
          {experience.map((e) => (
            <div key={e.title} className="rounded-2xl border p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold">{e.title}</h2>
                <span className="text-sm text-slate-600">{e.time}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                {e.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
  