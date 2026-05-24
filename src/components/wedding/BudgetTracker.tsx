import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export interface BudgetCategory {
  id: string;
  name: string;
  icon: string;
  allocated: number;
  spent: number;
}

export interface BudgetTrackerProps {
  totalBudget: number;
  categories: BudgetCategory[];
  currency?: string;
  className?: string;
}

function formatINR(amount: number, currency: string): string {
  if (currency === "₹") {
    return `₹${amount.toLocaleString("en-IN")}`;
  }

  return `${currency}${amount.toLocaleString()}`;
}

export function BudgetTracker({
  totalBudget,
  categories,
  currency = "₹",
  className,
}: BudgetTrackerProps) {
  const totalSpent = categories.reduce((sum, category) => sum + category.spent, 0);
  const remaining = totalBudget - totalSpent;
  const overallPercent = Math.min(100, Math.round((totalSpent / totalBudget) * 100));

  return (
    <Card className={cn("border-2 border-[#C9A84C]", className)}>
      <CardHeader className="rounded-t-lg bg-gradient-to-r from-[#800020] to-[#5c0016] text-[#FFF8F0]">
        <CardTitle className="text-[#FFF8F0]">💰 Wedding Budget Tracker</CardTitle>
        <div className="mt-2 space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-[#F5C6A0]">Total Budget</span>
            <span className="font-bold text-[#C9A84C]">{formatINR(totalBudget, currency)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#F5C6A0]">Spent</span>
            <span className="font-bold text-white">{formatINR(totalSpent, currency)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#F5C6A0]">Remaining</span>
            <span className={cn("font-bold", remaining < 0 ? "text-red-400" : "text-green-400")}>
              {formatINR(Math.abs(remaining), currency)}
              {remaining < 0 ? " over!" : ""}
            </span>
          </div>
          <div className="mt-2">
            <Progress value={overallPercent} className="h-3 bg-[#5c0016]" />
            <p className="mt-1 text-xs text-[#C9A84C]">{overallPercent}% of budget used</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 p-4">
        {categories.map((category) => {
          const percentUsed = Math.min(
            100,
            Math.round((category.spent / category.allocated) * 100)
          );
          const isOver = category.spent > category.allocated;

          return (
            <div key={category.id} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#2D1B0E]">
                  {category.icon} {category.name}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#7D5A3C]">
                    {formatINR(category.spent, currency)} / {formatINR(category.allocated, currency)}
                  </span>
                  {isOver && (
                    <Badge className="border-red-300 bg-red-100 text-xs text-red-700">Over!</Badge>
                  )}
                </div>
              </div>
              <Progress
                value={percentUsed}
                className={cn("h-2", isOver ? "bg-red-100" : "bg-[#F5E6D3]")}
              />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
