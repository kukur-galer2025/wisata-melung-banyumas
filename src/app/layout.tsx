import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wisata Pagubugan Melung — Surga Tersembunyi di Kaki Gunung Slamet",
  description:
    "Nikmati keindahan kolam renang alami di tengah sawah terasering, camping ground, dan spot foto instagramable di Desa Wisata Melung, Kedungbanteng, Banyumas. Tiket masuk hanya Rp10.000!",
  keywords:
    "wisata melung, pagubugan melung, kolam renang sawah, wisata banyumas, desa wisata melung, gunung slamet, camping banyumas, wisata alam jawa tengah",
  openGraph: {
    type: "website",
    title: "Wisata Pagubugan Melung — Surga Tersembunyi di Kaki Gunung Slamet",
    description:
      "Kolam renang alami di tengah sawah terasering dengan air pegunungan jernih. Destinasi wisata keluarga terbaik di Banyumas.",
    siteName: "Wisata Pagubugan Melung",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f4c2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
