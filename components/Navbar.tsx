"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200/20">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Anish Chidella
        </Link>

        <div className="flex gap-4 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition ${
                pathname === l.href
                  ? "text-slate-900 dark:text-white"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
