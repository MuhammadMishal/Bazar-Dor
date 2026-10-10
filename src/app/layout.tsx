import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { ToastContainer } from "react-toastify";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["latin", "bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "Explore products, compare prices, and find the best deals.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" data-theme="light" className={hindSiliguri.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="min-w-0 flex-1 bg-[#f0f5f0]">
          <div className="container mx-auto w-full">{children}</div>
        </main>
        <Footer />
        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
