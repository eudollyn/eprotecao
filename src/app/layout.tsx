import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileSplash from "@/components/MobileSplash";

export const metadata: Metadata = {
  title: "eProteção",
  description: "Podcast, notícias e conteúdo automotivo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-slate-900">
        <MobileSplash />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}