export default function ContactPage() {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="max-w-2xl text-slate-600">
          Best way to reach me is email. I usually respond within 24–48 hours.
        </p>
  
        <div className="rounded-2xl border p-5 space-y-3">
          <div>
            <div className="text-sm text-slate-600">Email</div>
            <a className="underline" href="mailto:youremail@example.com">
              youremail@example.com
            </a>
          </div>
          <div className="flex gap-4 text-sm">
            <a className="underline" href="https://github.com/YOUR_GITHUB" target="_blank">GitHub</a>
            <a className="underline" href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    );
  }
  