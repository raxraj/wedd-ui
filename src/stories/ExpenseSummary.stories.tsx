import type { Meta, StoryObj } from "@storybook/react";
import { ExpenseSummary } from "@/components/wedding/ExpenseSummary";
import type { Expense } from "@/components/wedding/ExpenseSummary";

const expenses: Expense[] = [
  {
    id: "1",
    description: "Venue booking advance",
    category: "Venue",
    amount: 200000,
    date: "2025-06-01",
    paidBy: "Arjun",
    paymentMethod: "NEFT",
    receiptAvailable: true,
  },
  {
    id: "2",
    description: "Photographer deposit",
    category: "Photography",
    amount: 50000,
    date: "2025-06-15",
    paidBy: "Arjun",
    paymentMethod: "UPI",
    receiptAvailable: true,
  },
  {
    id: "3",
    description: "Bridal lehenga",
    category: "Clothing",
    amount: 85000,
    date: "2025-07-10",
    paidBy: "Priya",
    receiptAvailable: false,
  },
  {
    id: "4",
    description: "Catering advance",
    category: "Catering",
    amount: 100000,
    date: "2025-07-20",
    paidBy: "Ramesh Sharma",
    paymentMethod: "Cheque",
    receiptAvailable: true,
  },
  {
    id: "5",
    description: "Floral decoration advance",
    category: "Decoration",
    amount: 45000,
    date: "2025-08-01",
    paidBy: "Arjun",
    paymentMethod: "UPI",
    receiptAvailable: true,
  },
  {
    id: "6",
    description: "DJ booking",
    category: "Music",
    amount: 35000,
    date: "2025-08-05",
    paidBy: "Arjun",
    paymentMethod: "Cash",
    receiptAvailable: false,
  },
  {
    id: "7",
    description: "Mehendi artist booking",
    category: "Ceremony",
    amount: 15000,
    date: "2025-08-10",
    paidBy: "Priya",
    paymentMethod: "UPI",
    receiptAvailable: true,
  },
  {
    id: "8",
    description: "Wedding card printing",
    category: "Invitation",
    amount: 12000,
    date: "2025-08-12",
    paidBy: "Ramesh Sharma",
    receiptAvailable: true,
  },
];

const meta: Meta<typeof ExpenseSummary> = {
  title: "Wedding/ExpenseSummary",
  component: ExpenseSummary,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ExpenseSummary>;

export const Default: Story = {
  args: { expenses, currency: "₹" },
};
