const experience = [
    {
      title: "Software Engineering Intern — Fiserv",
      time: "June 2025 – Aug 2025",
      bullets: [
        "Modernized the Disputes WorkSpace application using React and TypeScript, reducing paper-based fraud alerts by 90% and enabling real-time email/SMS updates.",
        "Built scalable backend APIs with Spring Boot and MSSQL to support dynamic search and dispute workflow management.",
        "Wrote 80+ unit tests with Mockito achieving 98% code coverage and conducted end-to-end testing with CucumberJS and Playwright.",
      ],
    },
    {
      title: "Software Engineering Intern — IpserLab (LindoGourmet)",
      time: "June 2024 – Nov 2024",
      bullets: [
        "Built and deployed a full-stack recipe database platform using Apache Tomcat and PostgreSQL, improving query performance by 40%.",
        "Redesigned the mobile interface, increasing returning mobile users by 40% and average session duration by 27%.",
        "Optimized data management techniques, reducing redundancy by 30% and improving system capacity by 25%.",
      ],
    },
    {
      title: "Software Engineering Intern — Armo Consultants",
      time: "Nov 2022 – May 2023",
      bullets: [
        "Implemented a shopping cart system using Java, HTML, and JavaScript, improving checkout efficiency by 35%.",
        "Participated in Agile ceremonies including sprint planning, stand-ups, and code reviews.",
        "Refactored API validation logic, reducing user-reported bugs by 15%.",
      ],
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
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
  