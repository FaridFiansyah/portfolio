import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
