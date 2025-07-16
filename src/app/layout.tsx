import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';  // ✅ Import here
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Richie Thiesfeldt | My Portfolio",
  description: "Showcasing my work and projects",
  icons: {
    icon: '/favicon.ico', // or '/favicon.png' if using PNG
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header at the top */}
        <Header />

        {/* Main page content */}
        <main>{children}</main>

        {/* Footer at the bottom */}
        <Footer />

        <Analytics /> {/* ✅ Add this here */}
      </body>
    </html>
  );
}
