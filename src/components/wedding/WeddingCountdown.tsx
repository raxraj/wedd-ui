"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface WeddingCountdownProps {
  weddingDate: string;
  groomName?: string;
  brideName?: string;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(weddingDate: string): TimeLeft {
  const diff = new Date(weddingDate).getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function WeddingCountdown({
  weddingDate,
  groomName,
  brideName,
  className,
}: WeddingCountdownProps) {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>(() => getTimeLeft(weddingDate));

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(weddingDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [weddingDate]);

  const isOver = Object.values(timeLeft).every((value) => value === 0);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-gradient-to-b from-[#800020] to-[#5c0016] p-6 text-center text-[#FFF8F0]",
        className
      )}
    >
      <div className="absolute top-2 left-2 select-none text-3xl text-[#C9A84C] opacity-20">❋</div>
      <div className="absolute top-2 right-2 select-none text-3xl text-[#C9A84C] opacity-20">❋</div>

      <p className="mb-2 text-xs tracking-widest text-[#C9A84C] uppercase">
        {isOver ? "🎉 The Big Day Has Arrived!" : "Counting Down To"}
      </p>

      {groomName && brideName ? (
        <h2 className="mb-4 text-xl font-bold" style={{ fontFamily: "serif" }}>
          {groomName} <span className="text-[#C9A84C]">❤</span> {brideName}
        </h2>
      ) : (
        <h2 className="mb-4 text-xl font-bold">The Wedding</h2>
      )}

      {!isOver ? (
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-[#5c0016] p-3">
              <div className="text-3xl font-bold text-[#C9A84C]">
                {String(value).padStart(2, "0")}
              </div>
              <div className="mt-1 text-xs text-[#F5C6A0]">{label}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-4xl">💒</div>
      )}

      <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
      <p className="mt-3 text-sm text-[#F5C6A0]">
        🗓️
        {" "}
        {new Date(weddingDate).toLocaleDateString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}
