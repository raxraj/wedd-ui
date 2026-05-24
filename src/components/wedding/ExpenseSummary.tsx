import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface Expense {
  id: string;
  description: string;
  category: string;
  amount: number;
  date: string;
  paidBy: string;
  paymentMethod?: string;
  receiptAvailable?: boolean;
}

export interface ExpenseSummaryProps {
  expenses: Expense[];
  currency?: string;
  className?: string;
}

function formatINR(amount: number, currency: string): string {
  if (currency === "₹") {
    return `₹${amount.toLocaleString("en-IN")}`;
  }

  return `${currency}${amount.toLocaleString()}`;
}

const categoryColors = [
  "#800020",
  "#C9A84C",
  "#00695C",
  "#1A237E",
  "#C2185B",
  "#FF6700",
  "#5c0016",
];

export function ExpenseSummary({ expenses, currency = "₹", className }: ExpenseSummaryProps) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const byCategory = expenses.reduce<
    Record<string, { total: number; count: number; color: string }>
  >((accumulator, expense) => {
    if (!accumulator[expense.category]) {
      accumulator[expense.category] = {
        total: 0,
        count: 0,
        color: categoryColors[Object.keys(accumulator).length % categoryColors.length],
      };
    }

    accumulator[expense.category].total += expense.amount;
    accumulator[expense.category].count += 1;
    return accumulator;
  }, {});

  return (
    <Card className={cn("border-2 border-[#C9A84C]", className)}>
      <CardHeader className="rounded-t-lg bg-gradient-to-r from-[#800020] to-[#5c0016] text-[#FFF8F0]">
        <CardTitle className="text-[#FFF8F0]">📊 Expense Summary</CardTitle>
        <p className="mt-1 text-lg font-bold text-[#C9A84C]">{formatINR(total, currency)} Total</p>
        <p className="text-xs text-[#F5C6A0]">{expenses.length} transactions</p>
      </CardHeader>
      <CardContent className="space-y-4 p-4">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-[#2D1B0E]">By Category</h3>
          <div className="space-y-2">
            {Object.entries(byCategory).map(([category, data]) => {
              const percent = total > 0 ? Math.round((data.total / total) * 100) : 0;

              return (
                <div key={category}>
                  <div className="mb-1 flex justify-between text-xs text-[#2D1B0E]">
                    <span className="font-medium">{category}</span>
                    <span>
                      {formatINR(data.total, currency)} ({percent}%)
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[#F5E6D3]">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${percent}%`, backgroundColor: data.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-[#2D1B0E]">Recent Transactions</h3>
          <div className="max-h-48 space-y-1.5 overflow-y-auto">
            {[...expenses]
              .sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime())
              .slice(0, 8)
              .map((expense) => (
                <div
                  key={expense.id}
                  className="flex items-center justify-between rounded border border-[#E8D5B7] bg-[#FFF8F0] p-2 text-xs"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-[#2D1B0E]">{expense.description}</p>
                    <p className="text-[#7D5A3C]">
                      {expense.date} · {expense.paidBy}
                    </p>
                  </div>
                  <div className="ml-2 flex shrink-0 items-center gap-1.5">
                    {expense.receiptAvailable && <span title="Receipt available">🧾</span>}
                    <Badge className="border-none bg-[#F5E6D3] text-xs text-[#7D5A3C]">
                      {expense.category}
                    </Badge>
                    <span className="font-semibold text-[#800020]">
                      {formatINR(expense.amount, currency)}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
