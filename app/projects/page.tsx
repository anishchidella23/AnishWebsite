const projects = [
    {
      name: "Jiggy — Modern Day Just Dance",
      tagline: "Real-time computer vision dance evaluation platform",
      bullets: [
        "Built a real-time web app comparing user dance movements to reference videos, improving movement accuracy by 30% and learning speed by 25%.",
        "Implemented pose detection and motion analysis using MediaPipe, NumPy, and Pandas with joint-angle thresholding.",
        "Developed real-time video streaming and feedback using Flask, Socket.IO, WebRTC, and JavaScript, supporting 10+ concurrent users.",
      ],
      tags: ["Python", "MediaPipe", "Flask", "WebRTC", "Socket.IO"],
      links: {
        code: "https://github.com/anishchidella23",
      },
    },
    {
      name: "SmallC Compiler Optimizer & Type Checker",
      tagline: "OCaml-based compiler with static analysis",
      bullets: [
        "Implemented a lexer and CFG parser in OCaml to generate an AST for a toy version of C.",
        "Built constant folding, propagation, and branch folding optimizations.",
        "Integrated static type inference to catch semantic errors and division-by-zero at compile time.",
      ],
      tags: ["OCaml", "Compilers", "Static Analysis"],
    },
    {
      name: "Auto-Hug Device for Sensory Overload",
      tagline: "Wearable assistive hardware device",
      bullets: [
        "Engineered a wearable device providing automated deep pressure therapy for individuals with sensory processing disorders.",
        "Programmed automated compression sequences using Arduino, controlling pressure and timing.",
        "Conducted user testing and refined hardware design to improve comfort and usability.",
      ],
      tags: ["Arduino", "Embedded Systems", "Human-Centered Design"],
    },
  ];
  
  export default function ProjectsPage() {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="max-w-2xl text-slate-600">
          Selected projects highlighting full-stack engineering, systems work, and
          applied computer vision.
        </p>
  
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} className="rounded-2xl border p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">{p.name}</h2>
                  <p className="text-sm text-slate-600">{p.tagline}</p>
                </div>
                {p.links?.code && (
                  <a
                    className="text-sm underline"
                    href={p.links.code}
                    target="_blank"
                  >
                    Code
                  </a>
                )}
              </div>
  
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
  
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-3 py-1 text-xs text-slate-600"
                  >
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
  