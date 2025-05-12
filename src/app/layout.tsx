import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wuji Health - AI-powered Healthcare Browser",
  description: "Navigate healthcare with intelligence and precision. An AI-powered browser designed specifically for medical professionals and patients.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wujihealth.com",
    title: "Wuji Health - AI-powered Healthcare Browser",
    description: "Navigate healthcare with intelligence and precision. An AI-powered browser designed specifically for medical professionals and patients.",
    siteName: "Wuji Health",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Wuji Health - Navigate healthcare with intelligence and precision"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wuji Health - AI-powered Healthcare Browser",
    description: "Navigate healthcare with intelligence and precision. An AI-powered browser designed specifically for medical professionals and patients.",
    images: ["/og.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
