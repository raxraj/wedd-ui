import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export type EventStatus = "upcoming" | "ongoing" | "completed";

export interface WeddingEvent {
  id: string;
  name: string;
  nameHindi?: string;
  date: string;
  time: string;
  venue: string;
  description?: string;
  status: EventStatus;
  icon: string;
  dressCode?: string;
}

export interface EventTimelineProps {
  events: WeddingEvent[];
  className?: string;
}

const statusStyles: Record<EventStatus, { badge: string; dot: string }> = {
  completed: { badge: "bg-[#00695C] text-white", dot: "bg-[#00695C]" },
  ongoing: { badge: "bg-[#C9A84C] text-white", dot: "bg-[#C9A84C] animate-pulse" },
  upcoming: {
    badge: "bg-[#E8D5B7] text-[#7D5A3C]",
    dot: "border-2 border-[#C9A84C] bg-[#E8D5B7]",
  },
};

export function EventTimeline({ events, className }: EventTimelineProps) {
  return (
    <div className={cn("space-y-0", className)}>
      <div className="rounded-t-lg bg-gradient-to-r from-[#800020] to-[#5c0016] px-6 py-4 text-[#FFF8F0]">
        <h2 className="text-xl font-bold text-[#FFF8F0]">🎉 Wedding Events</h2>
        <p className="mt-1 text-sm text-[#F5C6A0]">Your complete celebration schedule</p>
      </div>
      <div className="rounded-b-lg border-2 border-t-0 border-[#C9A84C] bg-white p-4">
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-[#E8D5B7]" />
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.id} className="relative flex gap-4 pl-12">
                <div
                  className={cn(
                    "absolute top-1 left-3.5 h-3 w-3 rounded-full",
                    statusStyles[event.status].dot
                  )}
                />
                <div className="flex-1 rounded-lg border border-[#E8D5B7] bg-[#FFF8F0] p-3 transition-colors hover:border-[#C9A84C]">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{event.icon}</span>
                      <div>
                        <h3 className="font-semibold text-[#2D1B0E]">{event.name}</h3>
                        {event.nameHindi && (
                          <p className="text-xs text-[#7D5A3C]">{event.nameHindi}</p>
                        )}
                      </div>
                    </div>
                    <Badge className={cn("shrink-0 text-xs", statusStyles[event.status].badge)}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-1 text-xs text-[#7D5A3C]">
                    <span>📅 {event.date}</span>
                    <span>🕐 {event.time}</span>
                    <span className="col-span-2">📍 {event.venue}</span>
                    {event.dressCode && (
                      <span className="col-span-2">👗 Dress Code: {event.dressCode}</span>
                    )}
                  </div>
                  {event.description && (
                    <p className="mt-2 text-xs italic text-[#7D5A3C]">{event.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
