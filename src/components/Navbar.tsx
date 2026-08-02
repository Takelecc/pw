import { useState } from "react";
import { personalInfo, navLinks } from "../data/portfolio";
import { useTheme } from "../theme";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme, brightness, setBrightness } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-surface-border/50 bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-text"
        >
          {personalInfo.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personalInfo.resumeUrl}
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-surface transition-colors hover:bg-accent-dim"
            >
              Resume
            </a>
          </li>
          <li className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded px-2 py-1 text-sm text-muted hover:text-accent"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
            <input
              type="range"
              min="0.6"
              max="1.2"
              step="0.01"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              aria-label="Brightness"
              className="h-1 w-24 cursor-pointer accent-accent"
            />
          </li>
        </ul>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-text transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-text transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-text transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-surface-border bg-surface-raised px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted transition-colors hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personalInfo.resumeUrl}
                className="inline-block rounded-lg bg-accent px-4 py-2 text-sm font-medium text-surface"
              >
                Resume
              </a>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <button
                onClick={() => { toggleTheme(); setOpen(false); }}
                aria-label="Toggle theme"
                className="rounded px-2 py-1 text-sm text-muted hover:text-accent"
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </button>
              <input
                type="range"
                min="0.6"
                max="1.2"
                step="0.01"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                aria-label="Brightness"
                className="h-1 w-full cursor-pointer accent-accent"
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
