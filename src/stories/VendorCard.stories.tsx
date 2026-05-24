import type { Meta, StoryObj } from "@storybook/react";
import { VendorCard } from "@/components/wedding/VendorCard";
import type { Vendor } from "@/components/wedding/VendorCard";

const photographer: Vendor = {
  id: "1",
  name: "Kapoor Photography",
  category: "photography",
  rating: 5,
  priceRange: "₹1,20,000 – ₹2,00,000",
  contactName: "Rahul Kapoor",
  phone: "+91 98765 43210",
  address: "Bandra West, Mumbai",
  status: "booked",
  notes: "Portfolio reviewed. Candid + Traditional package.",
  amountPaid: 50000,
  totalAmount: 150000,
  currency: "₹",
};

const caterer: Vendor = {
  id: "2",
  name: "Punjabi Flavors Catering",
  category: "catering",
  rating: 4,
  priceRange: "₹800–₹1200 per plate",
  contactName: "Gurpreet Singh",
  phone: "+91 87654 32109",
  status: "shortlisted",
  notes: "Tasting scheduled for next week.",
};

const meta: Meta<typeof VendorCard> = {
  title: "Wedding/VendorCard",
  component: VendorCard,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof VendorCard>;

export const Photographer: Story = {
  args: {
    vendor: photographer,
    onContact: (vendor) => console.log("Contact", vendor.name),
    onUpdateStatus: (_id, status) => console.log("Status", status),
  },
};

export const Caterer: Story = {
  args: {
    vendor: caterer,
    onContact: (vendor) => console.log("Contact", vendor.name),
  },
};

export const Pandit: Story = {
  args: {
    vendor: {
      id: "3",
      name: "Pt. Shiv Shankar Joshi",
      category: "pandit",
      rating: 5,
      priceRange: "₹21,000 – ₹51,000",
      phone: "+91 76543 21098",
      status: "booked",
      notes: "Confirmed for Pheras 11 AM",
    },
  },
};
