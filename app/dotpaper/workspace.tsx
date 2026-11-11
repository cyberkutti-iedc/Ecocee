"use client";

import { useState } from "react";
import { applications, type ApplicationId } from "./shared";

/**
 * The window in the hero. The only interactive part of the page.
 * It shows what each application is for and what it covers. No sample data.
 * Colors come from the CSS variables set on <main> in page.tsx.
 */
export function Workspace() {
  const [active, setActive] = useState<ApplicationId>("service");
  const current = applications.find((a) => a.id === active)!;

  return (
    <div className="grid overflow-hidden rounded-t-xl bg-[var(--surface)] text-[var(--ink)] sm:grid-cols-[210px_1fr]">
      <nav
        aria-label="Dotpaper applications"
        className="border-b border-[var(--rule)] bg-[var(--paper)] p-3 sm:border-b-0 sm:border-r"
      >
        <ul className="flex gap-1 overflow-x-auto sm:block sm:space-y-1">
          {applications.map((a) => {
            const selected = a.id === active;
            return (
              <li key={a.id} className="shrink-0 sm:shrink">
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(a.id)}
                  className={`relative w-full rounded-md px-3 py-2 text-left text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cobalt-text)] ${
                    selected
                      ? "bg-[var(--ink)]/8 before:absolute before:inset-y-2 before:left-0 before:w-[3px] before:rounded-full before:bg-[var(--tang)]"
                      : "text-[var(--muted)] hover:bg-[var(--ink)]/5 hover:text-[var(--ink)]"
                  }`}
                >
                  {a.short}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex min-h-[340px] min-w-0 flex-col p-5 sm:p-8" aria-live="polite">
        <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{current.name}</h3>
        <p className="mt-3 max-w-xl text-lg leading-relaxed text-[var(--muted)]">{current.description}</p>

        <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-[var(--rule)] bg-[var(--rule)] sm:grid-cols-2">
          {current.covers.map((item) => (
            <li
              key={item}
              className="bg-[var(--surface)] px-5 py-4 text-lg font-medium sm:[&:last-child:nth-child(odd)]:col-span-2"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-auto pt-6 text-sm text-[var(--muted)]">The same familiar layout in every application.</p>
      </div>
    </div>
  );
}