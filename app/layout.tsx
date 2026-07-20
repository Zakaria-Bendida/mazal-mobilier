import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "./lib/LangContext";
import { Preloader } from "./components/Preloader";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LangProvider>
          <Preloader />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
