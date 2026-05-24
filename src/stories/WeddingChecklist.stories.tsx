import type { Meta, StoryObj } from "@storybook/react";
import { WeddingChecklist } from "@/components/wedding/WeddingChecklist";
import type { ChecklistItem } from "@/components/wedding/WeddingChecklist";

const items: ChecklistItem[] = [
  {
    id: "1",
    task: "Book wedding venue",
    category: "venue",
    priority: "high",
    dueDate: "6 months before",
    completed: true,
  },
  {
    id: "2",
    task: "Finalise caterer & menu tasting",
    category: "catering",
    priority: "high",
    dueDate: "5 months before",
    completed: true,
  },
  {
    id: "3",
    task: "Order bridal lehenga",
    category: "clothing",
    priority: "high",
    dueDate: "4 months before",
    completed: false,
    assignedTo: "Priya",
  },
  {
    id: "4",
    task: "Book photographer & videographer",
    category: "photography",
    priority: "high",
    dueDate: "4 months before",
    completed: true,
  },
  {
    id: "5",
    task: "Send out wedding invitations",
    category: "guest",
    priority: "high",
    dueDate: "3 months before",
    completed: false,
  },
  {
    id: "6",
    task: "Finalise mandap decoration",
    category: "decoration",
    priority: "medium",
    dueDate: "2 months before",
    completed: false,
    assignedTo: "Arjun",
  },
  {
    id: "7",
    task: "Book mehendi artist",
    category: "ceremony",
    priority: "medium",
    dueDate: "2 months before",
    completed: false,
  },
  {
    id: "8",
    task: "Confirm pandit for ceremony",
    category: "ceremony",
    priority: "high",
    dueDate: "1 month before",
    completed: false,
  },
  {
    id: "9",
    task: "Arrange transport for guests",
    category: "other",
    priority: "medium",
    dueDate: "3 weeks before",
    completed: false,
  },
  {
    id: "10",
    task: "Book honeymoon flights & hotel",
    category: "honeymoon",
    priority: "low",
    dueDate: "2 months before",
    completed: false,
    assignedTo: "Both",
  },
];

const meta: Meta<typeof WeddingChecklist> = {
  title: "Wedding/WeddingChecklist",
  component: WeddingChecklist,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WeddingChecklist>;

export const Default: Story = {
  args: { items },
};

export const WithToggle: Story = {
  args: {
    items,
    onToggle: (id) => console.log("Toggle", id),
  },
};

export const AllComplete: Story = {
  args: {
    items: items.map((item) => ({ ...item, completed: true })),
    onToggle: (id) => console.log("Toggle", id),
  },
};
