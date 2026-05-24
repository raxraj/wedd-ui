import type { Meta, StoryObj } from "@storybook/react";
import { WeddingCountdown } from "@/components/wedding/WeddingCountdown";

const futureDate = new Date(Date.now() + 75 * 24 * 60 * 60 * 1000).toISOString();
const soonDate = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString();
const pastDate = new Date(Date.now() - 1000).toISOString();

const meta: Meta<typeof WeddingCountdown> = {
  title: "Wedding/WeddingCountdown",
  component: WeddingCountdown,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WeddingCountdown>;

export const Default: Story = {
  args: {
    weddingDate: futureDate,
    groomName: "Arjun",
    brideName: "Priya",
  },
};

export const CountingSoon: Story = {
  args: {
    weddingDate: soonDate,
    groomName: "Rohan",
    brideName: "Sneha",
  },
};

export const WeddingDayArrived: Story = {
  args: {
    weddingDate: pastDate,
    groomName: "Arjun",
    brideName: "Priya",
  },
};
