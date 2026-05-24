import type { Meta, StoryObj } from "@storybook/react";
import { GuestList } from "@/components/wedding/GuestList";
import type { Guest } from "@/components/wedding/GuestList";

const sampleGuests: Guest[] = [
  { id: "1", name: "Rajesh Kumar", rsvpStatus: "confirmed", side: "groom", table: 1 },
  {
    id: "2",
    name: "Sunita Devi",
    rsvpStatus: "confirmed",
    side: "bride",
    table: 2,
    plusOne: true,
  },
  { id: "3", name: "Anil Mehta", rsvpStatus: "pending", side: "groom" },
  { id: "4", name: "Kavita Singh", rsvpStatus: "declined", side: "bride" },
  {
    id: "5",
    name: "Deepak Nair",
    rsvpStatus: "confirmed",
    side: "both",
    table: 3,
    dietaryRestrictions: "Vegetarian",
  },
  { id: "6", name: "Meena Reddy", rsvpStatus: "pending", side: "bride", plusOne: true },
];

const meta: Meta<typeof GuestList> = {
  title: "Wedding/GuestList",
  component: GuestList,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GuestList>;

export const Default: Story = {
  args: { guests: sampleGuests },
};

export const WithRSVPControls: Story = {
  args: {
    guests: sampleGuests,
    onUpdateRSVP: (id, status) => console.log("Update RSVP", id, status),
  },
};
