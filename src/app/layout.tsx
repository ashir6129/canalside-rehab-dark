import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "@/styles/animations.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/lib/ThemeContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Canalside Rehab | Professional Secondary Care",
  description: "Providing a safe, structured, and therapeutic environment for sustainable recovery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}