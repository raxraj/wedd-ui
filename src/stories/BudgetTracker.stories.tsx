import type { Meta, StoryObj } from "@storybook/react";
import { BudgetTracker } from "@/components/wedding/BudgetTracker";
import type { BudgetCategory } from "@/components/wedding/BudgetTracker";

const categories: BudgetCategory[] = [
  { id: "1", name: "Venue", icon: "🏛️", allocated: 500000, spent: 450000 },
  { id: "2", name: "Catering", icon: "🍽️", allocated: 300000, spent: 320000 },
  { id: "3", name: "Photography", icon: "📷", allocated: 150000, spent: 120000 },
  { id: "4", name: "Decoration", icon: "💐", allocated: 200000, spent: 180000 },
  {
    id: "5",
    name: "Clothing & Jewellery",
    icon: "💍",
    allocated: 250000,
    spent: 200000,
  },
  { id: "6", name: "Music & Entertainment", icon: "🎵", allocated: 100000, spent: 75000 },
  { id: "7", name: "Mehendi & Makeup", icon: "💄", allocated: 80000, spent: 80000 },
];

const meta: Meta<typeof BudgetTracker> = {
  title: "Wedding/BudgetTracker",
  component: BudgetTracker,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BudgetTracker>;

export const Default: Story = {
  args: {
    totalBudget: 1500000,
    categories,
    currency: "₹",
  },
};

export const OverBudget: Story = {
  args: {
    totalBudget: 1000000,
    categories,
    currency: "₹",
  },
};
