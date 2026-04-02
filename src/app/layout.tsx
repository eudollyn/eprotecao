import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "eProteção",
  description: "Portal do podcast eProteção em parceria com a Digicar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-slate-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}