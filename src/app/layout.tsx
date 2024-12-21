import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Day One Project",
  description: "Project for first lerning next.js day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
