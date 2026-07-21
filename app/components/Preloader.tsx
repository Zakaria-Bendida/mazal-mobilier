"use client";

import { useEffect, useRef } from "react";

export function Preloader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => {
      el.classList.add("hidden");
    }, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="preloader" ref={ref} aria-hidden="true">
      <div className="pl-inner">
        <div className="pl-logo">
          <svg viewBox="0 0 40 40" width="26" height="26">
            <circle cx="20" cy="20" r="18" fill="none" stroke="#3c4a3b" strokeWidth="1.3" />
            <circle cx="20" cy="20" r="11" fill="none" stroke="#221e19" strokeWidth="1" />
            <circle cx="20" cy="20" r="4" fill="#3c4a3b" />
          </svg>
          MAZAL
        </div>
        <div className="pl-dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
