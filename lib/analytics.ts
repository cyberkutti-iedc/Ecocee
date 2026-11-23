/**
 * Safe client-side Google Analytics (gtag.js) event tracking for Ecocee.
 *
 * Rules:
 * - Does not run on the server (checks typeof window !== "undefined").
 * - Does not break if analytics is blocked by adblockers (window.gtag check + try/catch).
 * - Does not fire twice per click (handler attached once to clickable element).
 * - Preserves existing utm_* query parameters (does not alter URLs or navigation).
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        transport_type: "beacon",
        ...params,
      });
    }
  } catch {
    // Fail silently so user interactions and navigation are never blocked
  }
}

/**
 * github_click: when someone clicks any link to github.com/ecocee/Kode.
 * Params: { page: <page name> }
 */
export function trackGithubClick(page: string): void {
  trackEvent("github_click", { page });
}

/**
 * install_copy: when someone copies the install command.
 */
export function trackInstallCopy(): void {
  trackEvent("install_copy");
}

/**
 * contact_click: when someone clicks the contact button or email link.
 * Params: { page: <page name> }
 */
export function trackContactClick(page: string): void {
  trackEvent("contact_click", { page });
}

