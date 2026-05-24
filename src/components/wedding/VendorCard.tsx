"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type VendorStatus = "booked" | "shortlisted" | "contacted" | "rejected";
export type VendorCategory =
  | "catering"
  | "photography"
  | "videography"
  | "decoration"
  | "music"
  | "mehendi"
  | "makeup"
  | "pandit"
  | "venue"
  | "transport"
  | "invitation"
  | "jewellery"
  | "clothing"
  | "other";

export interface Vendor {
  id: string;
  name: string;
  category: VendorCategory;
  rating?: number;
  priceRange?: string;
  contactName?: string;
  phone?: string;
  email?: string;
  address?: string;
  status: VendorStatus;
  notes?: string;
  amountPaid?: number;
  totalAmount?: number;
  currency?: string;
}

export interface VendorCardProps {
  vendor: Vendor;
  onContact?: (vendor: Vendor) => void;
  onUpdateStatus?: (id: string, status: VendorStatus) => void;
  className?: string;
}

const categoryIcons: Record<VendorCategory, string> = {
  catering: "🍽️",
  photography: "📷",
  videography: "🎬",
  decoration: "💐",
  music: "🎵",
  mehendi: "🌿",
  makeup: "💄",
  pandit: "🙏",
  venue: "🏛️",
  transport: "🚗",
  invitation: "💌",
  jewellery: "💍",
  clothing: "👗",
  other: "✨",
};

const statusStyles: Record<VendorStatus, string> = {
  booked: "bg-[#00695C] text-white",
  shortlisted: "bg-[#C9A84C] text-white",
  contacted: "bg-[#1A237E] text-white",
  rejected: "bg-gray-400 text-white",
};

export function VendorCard({ vendor, onContact, onUpdateStatus, className }: VendorCardProps) {
  const rating = vendor.rating;
  const paymentPct =
    vendor.totalAmount !== undefined && vendor.amountPaid !== undefined
      ? Math.round((vendor.amountPaid / vendor.totalAmount) * 100)
      : null;

  return (
    <Card className={cn("border border-[#C9A84C] transition-all hover:border-2", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{categoryIcons[vendor.category]}</span>
            <div>
              <CardTitle className="text-base text-[#2D1B0E]">{vendor.name}</CardTitle>
              <CardDescription className="capitalize text-[#7D5A3C]">
                {vendor.category}
              </CardDescription>
            </div>
          </div>
          <Badge className={cn("text-xs", statusStyles[vendor.status])}>
            {vendor.status.charAt(0).toUpperCase() + vendor.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 pb-2">
        {rating !== undefined && (
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={index < Math.round(rating) ? "text-[#C9A84C]" : "text-[#E8D5B7]"}
              >
                ★
              </span>
            ))}
          </div>
        )}
        {vendor.priceRange && <p className="text-sm text-[#7D5A3C]">💰 {vendor.priceRange}</p>}
        {vendor.contactName && <p className="text-sm text-[#7D5A3C]">👤 {vendor.contactName}</p>}
        {vendor.phone && <p className="text-sm text-[#7D5A3C]">📞 {vendor.phone}</p>}
        {vendor.address && <p className="text-sm text-[#7D5A3C]">📍 {vendor.address}</p>}
        {vendor.totalAmount !== undefined && vendor.amountPaid !== undefined && (
          <div className="rounded bg-[#FFF8F0] p-2 text-xs">
            <div className="flex justify-between text-[#2D1B0E]">
              <span>Payment</span>
              <span>
                {vendor.currency ?? "₹"}
                {vendor.amountPaid.toLocaleString("en-IN")} / {vendor.currency ?? "₹"}
                {vendor.totalAmount.toLocaleString("en-IN")}
              </span>
            </div>
            {paymentPct !== null && (
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[#E8D5B7]">
                <div className="h-full rounded-full bg-[#00695C]" style={{ width: `${paymentPct}%` }} />
              </div>
            )}
          </div>
        )}
        {vendor.notes && (
          <p className="border-l-2 border-[#C9A84C] pl-2 text-xs italic text-[#7D5A3C]">
            {vendor.notes}
          </p>
        )}
      </CardContent>
      {(onContact || onUpdateStatus) && (
        <CardFooter className="flex-wrap gap-2 pt-2">
          {onContact && (
            <Button
              size="sm"
              onClick={() => onContact(vendor)}
              className="bg-[#800020] text-xs text-white hover:bg-[#5c0016]"
            >
              Contact
            </Button>
          )}
          {onUpdateStatus && (
            <select
              value={vendor.status}
              onChange={(event) =>
                onUpdateStatus(vendor.id, event.target.value as VendorStatus)
              }
              className="rounded border border-[#E8D5B7] bg-white px-2 py-1 text-xs text-[#2D1B0E]"
            >
              <option value="shortlisted">Shortlisted</option>
              <option value="contacted">Contacted</option>
              <option value="booked">Booked</option>
              <option value="rejected">Rejected</option>
            </select>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
