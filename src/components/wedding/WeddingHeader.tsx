import * as React from "react";
import { cn } from "@/lib/utils";

export interface WeddingHeaderProps {
  groomName: string;
  brideName: string;
  weddingDate: string;
  venue?: string;
  subtitle?: string;
  className?: string;
}

export function WeddingHeader({
  groomName,
  brideName,
  weddingDate,
  venue,
  subtitle = "We're getting married!",
  className,
}: WeddingHeaderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-[#800020] to-[#5c0016] px-6 py-12 text-center text-[#FFF8F0]",
        className
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C9A84C] via-[#FFD700] to-[#C9A84C]" />
      <div className="absolute top-4 left-4 select-none text-4xl text-[#C9A84C] opacity-40">❋</div>
      <div className="absolute top-4 right-4 select-none text-4xl text-[#C9A84C] opacity-40">❋</div>
      <div className="absolute bottom-4 left-4 select-none text-4xl text-[#C9A84C] opacity-40">❋</div>
      <div className="absolute right-4 bottom-4 select-none text-4xl text-[#C9A84C] opacity-40">❋</div>

      <p className="mb-2 text-sm font-medium tracking-widest text-[#C9A84C] uppercase">
        ॐ श्री गणेशाय नमः
      </p>

      <h1 className="mb-1 text-5xl font-bold drop-shadow-lg" style={{ fontFamily: "serif" }}>
        {groomName}
      </h1>
      <div className="my-3 flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-[#C9A84C]" />
        <span className="text-2xl text-[#C9A84C]">❤</span>
        <div className="h-px w-16 bg-[#C9A84C]" />
      </div>
      <h1 className="mb-4 text-5xl font-bold drop-shadow-lg" style={{ fontFamily: "serif" }}>
        {brideName}
      </h1>

      <p className="mb-2 text-lg italic text-[#F5C6A0]">{subtitle}</p>
      <p className="text-xl font-semibold text-[#C9A84C]">{weddingDate}</p>
      {venue && <p className="mt-1 text-sm text-[#F5C6A0]">📍 {venue}</p>}

      <div className="absolute right-0 bottom-0 left-0 h-2 bg-gradient-to-r from-[#C9A84C] via-[#FFD700] to-[#C9A84C]" />
    </div>
  );
}
