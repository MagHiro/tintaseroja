import type { Metadata } from "next";
import { Varela } from "next/font/google";
import "./globals.css";

const varela = Varela({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-varela",
});

export const metadata: Metadata = {
  title: "Tinta Seroja — Temporary Tattoo Creator",
  description:
    "Temporary tattoo illustrations by Tinta Seroja — wearable artwork made for expression, experimentation, and moments worth remembering.",
  openGraph: {
    title: "Tinta Seroja — Temporary Tattoo Creator",
    description:
      "Wearable illustrations made for expression, experimentation, and moments worth remembering.",
    type: "website",
    locale: "id_ID",
  },
  icons: {
    icon: "/logo/tinta-seroja-mark.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={varela.variable}>
      <body>{children}</body>
    </html>
  );
}
