import type { Meta, StoryObj } from "@storybook/react";
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
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const meta: Meta = {
  title: "UI/WeddingTheme",
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;

export const Buttons: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button className="bg-[#800020] text-[#FFF8F0] hover:bg-[#5c0016]">Book Vendor</Button>
      <Button variant="outline" className="border-[#C9A84C] text-[#800020] hover:bg-[#FFF8F0]">
        View Details
      </Button>
      <Button variant="secondary">Send RSVP</Button>
      <Button className="bg-[#C9A84C] text-white hover:bg-[#b8943d]">Add Expense</Button>
      <Button variant="ghost" className="text-[#800020]">
        Cancel
      </Button>
    </div>
  ),
};

export const Badges: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-[#800020] text-white">Confirmed</Badge>
      <Badge className="bg-[#C9A84C] text-white">Pending</Badge>
      <Badge className="bg-[#00695C] text-white">Booked</Badge>
      <Badge className="bg-[#C2185B] text-white">Bride&apos;s Side</Badge>
      <Badge variant="outline" className="border-[#C9A84C] text-[#800020]">
        High Priority
      </Badge>
    </div>
  ),
};

export const Cards: StoryObj = {
  render: () => (
    <Card className="max-w-sm border-2 border-[#C9A84C]">
      <CardHeader className="rounded-t-lg bg-gradient-to-r from-[#800020] to-[#5c0016]">
        <CardTitle className="text-[#FFF8F0]">🌺 Sangeet Night</CardTitle>
        <CardDescription className="text-[#F5C6A0]">4th December 2025</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-sm text-[#2D1B0E]">
          Join us for an evening of music, dance, and celebration.
        </p>
        <Separator className="my-3 bg-[#E8D5B7]" />
        <p className="text-xs text-[#7D5A3C]">📍 Grand Ballroom, Hotel Taj, Mumbai</p>
        <p className="text-xs text-[#7D5A3C]">🕐 7:00 PM onwards</p>
      </CardContent>
      <CardFooter>
        <Button size="sm" className="w-full bg-[#800020] text-white hover:bg-[#5c0016]">
          RSVP Now
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const ProgressBars: StoryObj = {
  render: () => (
    <div className="max-w-sm space-y-4">
      <div>
        <div className="mb-1 flex justify-between text-xs text-[#7D5A3C]">
          <span>Overall Budget Used</span>
          <span>75%</span>
        </div>
        <Progress value={75} className="h-3" />
      </div>
      <div>
        <div className="mb-1 flex justify-between text-xs text-[#7D5A3C]">
          <span>Guest RSVPs Received</span>
          <span>60%</span>
        </div>
        <Progress value={60} className="h-2" />
      </div>
      <div>
        <div className="mb-1 flex justify-between text-xs text-[#7D5A3C]">
          <span>Tasks Completed</span>
          <span>40%</span>
        </div>
        <Progress value={40} className="h-2" />
      </div>
    </div>
  ),
};

export const TabsExample: StoryObj = {
  render: () => (
    <Tabs defaultValue="events" className="max-w-sm">
      <TabsList className="w-full bg-[#FDF0D5]">
        <TabsTrigger
          value="events"
          className="flex-1 data-[state=active]:bg-[#800020] data-[state=active]:text-white"
        >
          Events
        </TabsTrigger>
        <TabsTrigger
          value="guests"
          className="flex-1 data-[state=active]:bg-[#800020] data-[state=active]:text-white"
        >
          Guests
        </TabsTrigger>
        <TabsTrigger
          value="budget"
          className="flex-1 data-[state=active]:bg-[#800020] data-[state=active]:text-white"
        >
          Budget
        </TabsTrigger>
      </TabsList>
      <TabsContent value="events" className="p-2 text-sm text-[#2D1B0E]">
        🎉 Manage all wedding events here
      </TabsContent>
      <TabsContent value="guests" className="p-2 text-sm text-[#2D1B0E]">
        👥 View and manage guest list
      </TabsContent>
      <TabsContent value="budget" className="p-2 text-sm text-[#2D1B0E]">
        💰 Track wedding expenses
      </TabsContent>
    </Tabs>
  ),
};
