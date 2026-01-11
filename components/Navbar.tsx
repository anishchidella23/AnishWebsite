"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 14.2A7.6 7.6 0 0 1 9.8 3 6.7 6.7 0 1 0 21 14.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const resolvedTheme = theme === "system" ? systemTheme : theme;
  const isDark = resolvedTheme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur-xl dark:bg-black/25">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold tracking-tight">
            Anish
          </span>
          <span className="text-sm text-black/70 group-hover:text-black dark:text-white/75 dark:group-hover:text-white">
            Chidella
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm shadow-sm">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-full px-3 py-1.5 transition ${active
                      ? "text-black dark:text-white"
                      : "text-black/65 hover:text-black dark:text-white/70 dark:hover:text-white"
                    }`}
                >
                  {active && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-black/5 dark:bg-white/10" />
                  )}
                  {l.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Toggle theme"
            className="rounded-full border border-white/10 bg-white/5 p-2 text-black/70 transition hover:bg-black/5 hover:text-black dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {mounted ? (isDark ? <SunIcon /> : <MoonIcon />) : null}
          </button>
        </div>
      </nav>
    </header>
  );
}
