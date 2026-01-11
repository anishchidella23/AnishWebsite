export default function ContactPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>

            <p className="max-w-2xl text-slate-600">
                I’m always open to discussing internships, software engineering roles,
                and technical projects. The fastest way to reach me is by email.
            </p>

            <div className="rounded-2xl border p-5 space-y-3">
                <div>
                    <div className="text-sm text-slate-600">Email</div>
                    <a className="underline" href="mailto:anishchidella23@gmail.com">
                        anishchidella23@gmail.com
                    </a>
                </div>

                <div className="flex gap-4 text-sm">
                    <a
                        className="underline"
                        href="https://github.com/anishchidella23"
                        target="_blank"
                    >
                        GitHub
                    </a>
                    <a
                        className="underline"
                        href="https://www.linkedin.com/in/anish-chidella/"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}
