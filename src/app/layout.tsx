import type { Metadata } from "next";
import { Playfair_Display, Lora, Courier_Prime } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/ui/MainHeader";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const lora = Lora({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const courierPrime = Courier_Prime({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Parleykit",
  description:
    "An open-source web clone of the classic board game Diplomacy, built with a vintage diplomatic flair.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${lora.variable} ${courierPrime.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}