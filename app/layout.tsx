import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malnad Interiors | Premium Interior Solutions in Karnataka",
  description:
    "Leading Manufacturer of Office Partition, Aluminium Windows, Doors, False Ceiling Services since 2016. Call 8431454545 for free quote.",
  keywords: [
    "Malnad Interiors",
    "UPVC Windows",
    "Aluminium Windows",
    "Office Partition",
    "False Ceiling",
    "Toughened Glass",
    "ACP Cladding",
    "Interior Design Karnataka",
  ],
  authors: [{ name: "Malnad Interiors" }],
  openGraph: {
    title: "Malnad Interiors | Premium Interior Solutions",
    description:
      "Leading Manufacturer of Office Partition, Aluminium Windows, Doors, False Ceiling Services since 2016.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-body antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}