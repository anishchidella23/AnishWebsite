import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Anish Chidella | Software Engineer",
  description:
    "Software engineering portfolio of Anish Chidella. Full-stack, systems, and computer vision projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-5xl px-5 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
