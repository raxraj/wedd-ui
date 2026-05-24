"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type RSVPStatus = "confirmed" | "pending" | "declined";
export type GuestSide = "bride" | "groom" | "both";

export interface Guest {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  plusOne?: boolean;
  rsvpStatus: RSVPStatus;
  side: GuestSide;
  table?: number;
  dietaryRestrictions?: string;
}

export interface GuestListProps {
  guests: Guest[];
  onUpdateRSVP?: (id: string, status: RSVPStatus) => void;
  className?: string;
}

const rsvpColors: Record<RSVPStatus, string> = {
  confirmed: "bg-[#00695C] text-white",
  pending: "bg-[#C9A84C] text-white",
  declined: "bg-[#800020] text-white",
};

const rsvpLabels: Record<RSVPStatus, string> = {
  confirmed: "✓ Confirmed",
  pending: "⏳ Pending",
  declined: "✗ Declined",
};

const sideLabels: Record<GuestSide, string> = {
  bride: "🌸 Bride's Side",
  groom: "👘 Groom's Side",
  both: "💑 Both Sides",
};

export function GuestList({ guests, onUpdateRSVP, className }: GuestListProps) {
  const confirmed = guests.filter((guest) => guest.rsvpStatus === "confirmed").length;
  const pending = guests.filter((guest) => guest.rsvpStatus === "pending").length;
  const declined = guests.filter((guest) => guest.rsvpStatus === "declined").length;
  const totalWithPlusOnes = guests.reduce(
    (accumulator, guest) =>
      accumulator + 1 + (guest.plusOne && guest.rsvpStatus === "confirmed" ? 1 : 0),
    0
  );

  return (
    <Card className={cn("border-2 border-[#C9A84C]", className)}>
      <CardHeader className="rounded-t-lg bg-gradient-to-r from-[#800020] to-[#5c0016] text-[#FFF8F0]">
        <CardTitle className="text-[#FFF8F0]">🎊 Guest List</CardTitle>
        <div className="mt-2 flex gap-4 text-sm">
          <span className="text-[#C9A84C]">✓ {confirmed} Confirmed</span>
          <span className="text-[#F5C6A0]">⏳ {pending} Pending</span>
          <span className="text-[#F5C6A0]">✗ {declined} Declined</span>
          <span className="ml-auto text-[#C9A84C]">🧑‍🤝‍🧑 {totalWithPlusOnes} Total Attending</span>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-[#E8D5B7]">
          {guests.map((guest) => (
            <div
              key={guest.id}
              className="flex items-center px-4 py-3 transition-colors hover:bg-[#FFF8F0]"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#2D1B0E]">{guest.name}</span>
                  {guest.plusOne && <span className="text-xs text-[#7D5A3C]">+1</span>}
                </div>
                <div className="mt-0.5 flex flex-wrap gap-2">
                  <span className="text-xs text-[#7D5A3C]">{sideLabels[guest.side]}</span>
                  {guest.table && <span className="text-xs text-[#7D5A3C]">• Table {guest.table}</span>}
                  {guest.dietaryRestrictions && (
                    <span className="text-xs text-[#FF6700]">🌿 {guest.dietaryRestrictions}</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {onUpdateRSVP ? (
                  <select
                    value={guest.rsvpStatus}
                    onChange={(event) =>
                      onUpdateRSVP(guest.id, event.target.value as RSVPStatus)
                    }
                    className="rounded border border-[#E8D5B7] bg-white px-2 py-1 text-xs text-[#2D1B0E]"
                  >
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="declined">Declined</option>
                  </select>
                ) : (
                  <span
                    className={cn(
                      "rounded-full px-2 py-1 text-xs font-medium",
                      rsvpColors[guest.rsvpStatus]
                    )}
                  >
                    {rsvpLabels[guest.rsvpStatus]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
