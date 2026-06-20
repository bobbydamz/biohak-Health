"use client";

import { useEffect, useState } from "react";

// Launch target: 1 September 2026, 00:00 WAT (UTC+1)
const LAUNCH_DATE = new Date("2026-09-01T00:00:00+01:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = Math.max(LAUNCH_DATE - now, 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Render stable placeholders during SSR/hydration to avoid mismatch
  const display = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div
      className="grid grid-cols-4 gap-3 sm:gap-4"
      role="timer"
      aria-live="off"
      aria-label="Countdown to launch"
    >
      {UNITS.map(({ key, label }) => (
        <div
          key={key}
          className="flex flex-col items-center justify-center rounded-2xl bg-card shadow-[0_8px_30px_rgba(31,42,28,0.08)] py-4 px-2 sm:py-6 sm:px-4 min-w-[68px] sm:min-w-[100px]"
        >
          <span
            className="font-display font-semibold text-2xl sm:text-4xl md:text-5xl text-ink tabular-nums"
            suppressHydrationWarning
          >
            {String(display[key]).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-sage">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
