'use client';

import React, { useEffect, useState } from 'react';

export const LOGO_SRC = '/mero/logo.svg';

// The artwork's own bounding box inside the 1024x1024 viewBox. Cropping to
// this region removes the empty margin so the mark fills the container.
export const LOGO_VIEW_BOX = { x: 0, y: 0, width: 1024, height: 1024 };

interface LogoProps {
  /** Rendered width/height in px (the mark is square). */
  size?: number;
  /** Extra zoom on top of the size — the artwork keeps ~7% internal padding. */
  scale?: number;
  className?: string;
  /** Accessible label; pass '' for purely decorative usage. */
  title?: string;
}

/**
 * Official system logo. Loads the SVG from public/ at runtime so a new brand
 * asset only requires replacing `public/logo.svg` or `public/mero/logo.svg` — no rebuild of components.
 */
export function Logo({ size = 36, scale = 1.3, className = '', title = 'Logo' }: LogoProps) {
  const [svg, setSvg] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const sources = ['/mero/logo.svg', '/logo.svg'];

    async function loadLogo() {
      for (const src of sources) {
        try {
          const res = await fetch(src);
          if (res.ok) {
            const text = await res.text();
            if (!cancelled) {
              setSvg(text);
              return;
            }
          }
        } catch {
          // ignore & try next
        }
      }
      if (!cancelled) {
        setFailed(true);
      }
    }

    loadLogo();
    return () => {
      cancelled = true;
    };
  }, []);

  const box = LOGO_VIEW_BOX;
  const px = Math.round(size * scale);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={title || undefined}
        className={`rounded bg-blue-600 ${className}`}
        style={{ width: px, height: px }}
      />
    );
  }

  if (!svg) {
    return <div className={className} style={{ width: px, height: px }} aria-hidden="true" />;
  }

  return (
    <div
      className={className}
      style={{ width: px, height: px, overflow: 'hidden' }}
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: svg.replace(
            // Crop to the artwork bounds so the mark fills the box.
            /width="1024" height="1024"/,
            `width="${px}" height="${px}" viewBox="${box.x} ${box.y} ${box.width} ${box.height}" preserveAspectRatio="xMidYMid slice"`
          ),
        }}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
}
