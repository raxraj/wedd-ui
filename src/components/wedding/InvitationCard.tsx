import * as React from "react";
import { cn } from "@/lib/utils";

export interface InvitationCardProps {
  groomName: string;
  brideName: string;
  groomParents?: string;
  brideParents?: string;
  weddingDate: string;
  weddingTime?: string;
  venue: string;
  venueAddress?: string;
  receptionDate?: string;
  receptionVenue?: string;
  rsvpPhone?: string;
  rsvpDate?: string;
  className?: string;
}

export function InvitationCard({
  groomName,
  brideName,
  groomParents,
  brideParents,
  weddingDate,
  weddingTime,
  venue,
  venueAddress,
  receptionDate,
  receptionVenue,
  rsvpPhone,
  rsvpDate,
  className,
}: InvitationCardProps) {
  return (
    <div
      className={cn(
        "relative mx-auto max-w-sm overflow-hidden rounded-lg border-4 border-[#C9A84C] bg-[#FFF8F0] shadow-2xl",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-2 rounded border border-[#C9A84C] opacity-40" />

      <div className="bg-gradient-to-b from-[#800020] to-[#5c0016] px-6 py-6 text-center">
        <p className="mb-1 text-xs tracking-widest text-[#C9A84C]">🌺 शुभ विवाह 🌺</p>
        <p className="text-xs text-[#F5C6A0]">With the blessings of God</p>
      </div>

      <div className="h-2 bg-gradient-to-r from-[#C9A84C] via-[#FFD700] to-[#C9A84C]" />

      <div className="space-y-4 p-6 text-center">
        {(groomParents || brideParents) && (
          <div className="space-y-1 text-xs text-[#7D5A3C]">
            {groomParents && <p>{groomParents}</p>}
            {brideParents && <p>{brideParents}</p>}
            <p className="text-[#C9A84C]">joyfully invite you to celebrate the wedding of</p>
          </div>
        )}

        <div>
          <h2 className="text-3xl font-bold text-[#800020]" style={{ fontFamily: "serif" }}>
            {groomName}
          </h2>
          <div className="my-2 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-lg text-[#C9A84C]">❤</span>
            <div className="h-px w-8 bg-[#C9A84C]" />
          </div>
          <h2 className="text-3xl font-bold text-[#800020]" style={{ fontFamily: "serif" }}>
            {brideName}
          </h2>
        </div>

        <div className="space-y-1 rounded-lg bg-[#800020] px-4 py-3 text-[#FFF8F0]">
          <p className="font-semibold">{weddingDate}</p>
          {weddingTime && <p className="text-sm text-[#F5C6A0]">{weddingTime}</p>}
        </div>

        <div className="space-y-1 text-[#2D1B0E]">
          <p className="font-semibold text-[#800020]">📍 {venue}</p>
          {venueAddress && <p className="text-xs text-[#7D5A3C]">{venueAddress}</p>}
        </div>

        {(receptionDate || receptionVenue) && (
          <div className="space-y-0.5 border-t border-[#E8D5B7] pt-3 text-sm text-[#7D5A3C]">
            <p className="font-medium text-[#2D1B0E]">🎊 Reception</p>
            {receptionDate && <p>{receptionDate}</p>}
            {receptionVenue && <p>{receptionVenue}</p>}
          </div>
        )}

        {(rsvpPhone || rsvpDate) && (
          <div className="border-t border-[#E8D5B7] pt-3 text-xs text-[#7D5A3C]">
            <p className="mb-1 font-medium text-[#2D1B0E]">RSVP</p>
            {rsvpPhone && <p>📞 {rsvpPhone}</p>}
            {rsvpDate && <p>By {rsvpDate}</p>}
          </div>
        )}
      </div>

      <div className="h-2 bg-gradient-to-r from-[#C9A84C] via-[#FFD700] to-[#C9A84C]" />
      <div className="bg-gradient-to-t from-[#800020] to-[#5c0016] py-3 text-center">
        <p className="text-xs text-[#C9A84C]">❋ Warmly awaiting your presence ❋</p>
      </div>
    </div>
  );
}
