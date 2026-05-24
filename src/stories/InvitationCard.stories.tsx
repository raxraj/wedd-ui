import type { Meta, StoryObj } from "@storybook/react";
import { InvitationCard } from "@/components/wedding/InvitationCard";

const meta: Meta<typeof InvitationCard> = {
  title: "Wedding/InvitationCard",
  component: InvitationCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InvitationCard>;

export const Full: Story = {
  args: {
    groomName: "Arjun Sharma",
    brideName: "Priya Patel",
    groomParents: "Mr. & Mrs. Ramesh Sharma",
    brideParents: "Mr. & Mrs. Suresh Patel",
    weddingDate: "Friday, 5th December 2025",
    weddingTime: "11:00 AM (Muhurat)",
    venue: "The Grand Palace",
    venueAddress: "Juhu Beach Road, Mumbai – 400049",
    receptionDate: "Friday, 5th December 2025 · 7:00 PM",
    receptionVenue: "The Grand Palace, Mumbai",
    rsvpPhone: "+91 98765 43210",
    rsvpDate: "1st November 2025",
  },
};

export const Minimal: Story = {
  args: {
    groomName: "Vikram Singh",
    brideName: "Ananya Reddy",
    weddingDate: "Sunday, 12th January 2026",
    venue: "Laxmi Gardens, Hyderabad",
  },
};
