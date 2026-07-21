import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./lib/LangContext";
import { Preloader } from "./components/Preloader";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "MAZAL — Mobilier façonné à la main",
  description:
    "Manufacture de mobilier massif fait main à Alger. Tables, sièges, rangements et luminaires en chêne, noyer et frêne.",
  openGraph: {
    title: "MAZAL — Mobilier façonné à la main",
    description:
      "Manufacture de mobilier massif fait main à Alger.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
        <LangProvider>
          <Preloader />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
