"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export type ChecklistPriority = "high" | "medium" | "low";
export type ChecklistCategory =
  | "venue"
  | "catering"
  | "clothing"
  | "decoration"
  | "photography"
  | "music"
  | "guest"
  | "ceremony"
  | "honeymoon"
  | "legal"
  | "other";

export interface ChecklistItem {
  id: string;
  task: string;
  category: ChecklistCategory;
  priority: ChecklistPriority;
  dueDate?: string;
  completed: boolean;
  assignedTo?: string;
}

export interface WeddingChecklistProps {
  items: ChecklistItem[];
  onToggle?: (id: string) => void;
  className?: string;
}

const priorityColors: Record<ChecklistPriority, string> = {
  high: "border-red-200 bg-red-100 text-red-700",
  medium: "border-[#C9A84C] bg-[#FDF0D5] text-[#C9A84C]",
  low: "border-green-200 bg-green-50 text-green-700",
};

const categoryIcons: Record<ChecklistCategory, string> = {
  venue: "🏛️",
  catering: "🍽️",
  clothing: "👗",
  decoration: "💐",
  photography: "📷",
  music: "🎵",
  guest: "👥",
  ceremony: "🙏",
  honeymoon: "✈️",
  legal: "📜",
  other: "✨",
};

export function WeddingChecklist({ items, onToggle, className }: WeddingChecklistProps) {
  const completedCount = items.filter((item) => item.completed).length;
  const percentComplete = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;

  const grouped = items.reduce<Record<string, ChecklistItem[]>>((accumulator, item) => {
    const key = item.category;
    accumulator[key] ??= [];
    accumulator[key].push(item);
    return accumulator;
  }, {});

  return (
    <Card className={cn("border-2 border-[#C9A84C]", className)}>
      <CardHeader className="rounded-t-lg bg-gradient-to-r from-[#800020] to-[#5c0016] text-[#FFF8F0]">
        <CardTitle className="text-[#FFF8F0]">✅ Wedding Checklist</CardTitle>
        <div className="mt-2 space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-[#F5C6A0]">
              {completedCount} of {items.length} tasks done
            </span>
            <span className="font-bold text-[#C9A84C]">{percentComplete}%</span>
          </div>
          <Progress value={percentComplete} className="h-2 bg-[#5c0016]" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-4">
        {(Object.entries(grouped) as [ChecklistCategory, ChecklistItem[]][]).map(
          ([category, categoryItems]) => (
            <div key={category}>
              <h3 className="mb-2 text-sm font-semibold text-[#2D1B0E]">
                {categoryIcons[category]} {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <div className="space-y-1.5 pl-1">
                {categoryItems.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      "flex items-start gap-3 rounded-lg border p-2 transition-all",
                      item.completed
                        ? "border-green-200 bg-[#F0FFF0] opacity-75"
                        : "border-[#E8D5B7] bg-[#FFF8F0] hover:border-[#C9A84C]"
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => onToggle?.(item.id)}
                      className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#800020]"
                    />
                    <div className="min-w-0 flex-1">
                      <span
                        className={cn(
                          "text-sm",
                          item.completed ? "text-[#7D5A3C] line-through" : "text-[#2D1B0E]"
                        )}
                      >
                        {item.task}
                      </span>
                      <div className="mt-0.5 flex flex-wrap items-center gap-2">
                        <Badge
                          className={cn("border text-xs", priorityColors[item.priority])}
                          variant="outline"
                        >
                          {item.priority}
                        </Badge>
                        {item.dueDate && (
                          <span className="text-xs text-[#7D5A3C]">📅 {item.dueDate}</span>
                        )}
                        {item.assignedTo && (
                          <span className="text-xs text-[#7D5A3C]">👤 {item.assignedTo}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </CardContent>
    </Card>
  );
}
