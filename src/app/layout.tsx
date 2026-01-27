import type { Metadata } from "next";
import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import "./globals.css";

const griffon = localFont({
  src: [
    {
      path: "../../public/fonts/Griffon Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Helios",
  description: "Experience the art of illumination. Visit our exclusive showroom for chandeliers, pendant lights, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${griffon.variable} ${outfit.variable} antialiased bg-charcoal text-ivory font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
