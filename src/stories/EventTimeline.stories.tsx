import type { Meta, StoryObj } from "@storybook/react";
import { EventTimeline } from "@/components/wedding/EventTimeline";
import type { WeddingEvent } from "@/components/wedding/EventTimeline";

const events: WeddingEvent[] = [
  {
    id: "1",
    name: "Haldi Ceremony",
    nameHindi: "हल्दी",
    date: "3 Dec 2025",
    time: "10:00 AM",
    venue: "Sharma Residence, Delhi",
    status: "completed",
    icon: "🌿",
    description: "Turmeric ceremony at bride's home",
    dressCode: "Yellow Attire",
  },
  {
    id: "2",
    name: "Mehendi Night",
    nameHindi: "मेहँदी",
    date: "3 Dec 2025",
    time: "6:00 PM",
    venue: "Sharma Residence, Delhi",
    status: "completed",
    icon: "🪷",
    description: "Mehndi application and music",
    dressCode: "Traditional",
  },
  {
    id: "3",
    name: "Sangeet Ceremony",
    nameHindi: "संगीत",
    date: "4 Dec 2025",
    time: "7:00 PM",
    venue: "Grand Ballroom, Hotel Taj",
    status: "ongoing",
    icon: "🎵",
    description: "Music, dance and celebrations",
    dressCode: "Lehenga / Sherwani",
  },
  {
    id: "4",
    name: "Baraat",
    nameHindi: "बारात",
    date: "5 Dec 2025",
    time: "8:00 AM",
    venue: "Patel Gardens, Mumbai",
    status: "upcoming",
    icon: "🐴",
    description: "Groom's procession",
    dressCode: "Sherwani",
  },
  {
    id: "5",
    name: "Wedding Ceremony (Pheras)",
    nameHindi: "फेरे",
    date: "5 Dec 2025",
    time: "11:00 AM",
    venue: "The Grand Palace, Mumbai",
    status: "upcoming",
    icon: "🔥",
    description: "Sacred vows around the holy fire",
    dressCode: "Bridal Lehenga / Sherwani",
  },
  {
    id: "6",
    name: "Reception",
    nameHindi: "रिसेप्शन",
    date: "5 Dec 2025",
    time: "7:00 PM",
    venue: "The Grand Palace, Mumbai",
    status: "upcoming",
    icon: "🎊",
    dressCode: "Formal / Ethnic",
  },
];

const meta: Meta<typeof EventTimeline> = {
  title: "Wedding/EventTimeline",
  component: EventTimeline,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EventTimeline>;

export const Default: Story = {
  args: { events },
};

export const AllCompleted: Story = {
  args: {
    events: events.map((event) => ({ ...event, status: "completed" as const })),
  },
};
