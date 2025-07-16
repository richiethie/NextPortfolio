import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';  // ✅ Import here
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Richie Thiesfeldt | Software Engineer & Full-Stack Developer",
  description: "Explore Richie Thiesfeldt's portfolio: software projects, case studies, and full-stack development work with React, Node.js, Golang, and more.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Richie Thiesfeldt | Software Engineer & Full-Stack Developer",
    description: "Explore Richie Thiesfeldt's portfolio: software projects, case studies, and full-stack development work.",
    url: "https://richiethie.com",
    siteName: "Richie Thiesfeldt Portfolio",
    images: [
      {
        url: "/portfolio-og-image.png", // Create this image (1200x630) for previews
        width: 1200,
        height: 630,
        alt: "Richie Thiesfeldt Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richie Thiesfeldt | Software Engineer & Full-Stack Developer",
    description: "Explore Richie Thiesfeldt's portfolio: software projects, case studies, and full-stack development work.",
    images: ["/portfolio-og-image.png"],
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
