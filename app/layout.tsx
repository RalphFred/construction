import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const poppins =  Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Buildora — Masters of Consistency and Quality",
  description: "Buildora welcomes innovation as it embraced reliable craftsmanship. Six pillars of strength and excellence ensured lasting quality structures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
