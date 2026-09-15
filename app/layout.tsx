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
  title: "Tinta Seroja — On-Site Temporary Tattoo Artist Jakarta",
  description:
    "Temporary tattoo artist based in Jakarta, Indonesia. Book Tinta Seroja for on-site temporary tattoos at events, parties, brand activations, and pop-ups.",
  openGraph: {
    title: "Tinta Seroja — On-Site Temporary Tattoo Artist Jakarta",
    description:
      "Book a Jakarta-based temporary tattoo artist for events, parties, brand activations, pop-ups, and private gatherings.",
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
