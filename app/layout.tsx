import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import TraceRail from "@/components/TraceRail";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Mohamad Farid Fiansyah | Robotics & Edge AI Portfolio",
  description:
    "Mohamad Farid Fiansyah: Mobile robotics, embedded systems, edge AI, and computer vision engineer focused on autonomy and intelligent infrastructure.",
  keywords: [
    "Mohamad Farid Fiansyah",
    "robotics engineer",
    "embedded systems",
    "computer vision",
    "edge AI",
    "Jetson",
    "ROS 2",
    "portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Mohamad Farid Fiansyah" }],
  creator: "Mohamad Farid Fiansyah",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "Mohamad Farid Fiansyah Portfolio",
    title: "Mohamad Farid Fiansyah | Robotics & Edge AI Portfolio",
    description:
      "Mobile Robotics · Embedded Systems · Edge AI & Computer Vision · Web Engineering",
    locale: "en_US",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Mohamad Farid Fiansyah portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@faridfiansyah",
    title: "Mohamad Farid Fiansyah | Robotics & Edge AI Portfolio",
    description: "Mobile Robotics · Embedded Systems · Edge AI & Computer Vision",
    images: ["/og-image.webp"],
  },
};

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
  themeColor: "#0A1210",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <TraceRail />
        {children}
      </body>
    </html>
  );
}
