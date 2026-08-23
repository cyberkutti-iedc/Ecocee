/**
 * Date utilities for seasonal/cultural event gating.
 * Onam 2026: Thiruvonam on August 26, celebrations Aug 24-30.
 */

const ONAM_START_2026 = new Date("2026-08-24T00:00:00+05:30");
const ONAM_END_2026 = new Date("2026-08-31T23:59:59+05:30");
const THIRUVONAM_2026 = new Date("2026-08-26T00:00:00+05:30");

export function isOnamPeriod(): boolean {
  if (typeof window === "undefined") return false;
  const now = new Date();
  return now >= ONAM_START_2026 && now <= ONAM_END_2026;
}

export function isBeforeOnam(): boolean {
  if (typeof window === "undefined") return false;
  return new Date() < ONAM_START_2026;
}

export function daysUntilOnam(): number {
  const now = new Date();
  const diff = THIRUVONAM_2026.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function getOnamGreeting(): string {
  if (isOnamPeriod()) {
    return "Onam Ashamsakal! Wishing you a prosperous harvest season from the Ecocee family.";
  }
  return "";
}
