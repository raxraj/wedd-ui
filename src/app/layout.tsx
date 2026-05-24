import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedd UI",
  description: "Next.js 14 with TypeScript, Tailwind CSS, and ShadCN UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
