import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tabur Bareng UB — Platform Tadabbur Al-Qur'an",
  description:
    "Menaburkan benih kebaikan ayat Allah di muka bumi. Belajar Tadabbur bersama Ustadz Budi Ashari — bertahap, bermakna, konsisten.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
