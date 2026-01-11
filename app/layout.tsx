import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Anish Chidella | Portfolio",
  description: "Personal site showcasing projects, experience, and contact info.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-animated">
        <ThemeProvider>
          <Navbar />
          <main className="mx-auto max-w-5xl px-5 py-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
