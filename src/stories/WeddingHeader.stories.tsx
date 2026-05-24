import type { Meta, StoryObj } from "@storybook/react";
import { WeddingHeader } from "@/components/wedding/WeddingHeader";

const meta: Meta<typeof WeddingHeader> = {
  title: "Wedding/WeddingHeader",
  component: WeddingHeader,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WeddingHeader>;

export const Default: Story = {
  args: {
    groomName: "Arjun Sharma",
    brideName: "Priya Patel",
    weddingDate: "5th December 2025",
    venue: "The Grand Palace, Mumbai",
    subtitle: "We're getting married!",
  },
};

export const MinimalDetails: Story = {
  args: {
    groomName: "Vikram",
    brideName: "Ananya",
    weddingDate: "January 12, 2026",
  },
};
