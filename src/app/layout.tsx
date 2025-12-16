import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Video Editing Portfolio | Crafting Cinematic Excellence",
  description: "Transforming raw footage into award-winning stories. Professional video editing, color grading, and storytelling for brands, artists, and filmmakers.",
  keywords: ["video editing", "cinematic", "color grading", "storytelling", "premium video", "film editing", "post-production"],
  authors: [{ name: "Premium Video Editor" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Premium Video Editing Portfolio | Crafting Cinematic Excellence",
    description: "Transforming raw footage into award-winning stories. Professional video editing, color grading, and storytelling.",
    url: "https://your-portfolio.com",
    siteName: "Premium Video Editing Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Video Editing Portfolio",
    description: "Transforming raw footage into award-winning stories.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
