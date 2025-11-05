import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const hedvigLettersSerif = {
  variable: "--font-hedvig-letters-serif",
  style: {
    fontFamily: "'Hedvig Letters Serif', serif",
  },
};

export const metadata: Metadata = {
  title: {
    default: "Dome Media - Agencia Boutique de Marketing para Clínicas Estéticas",
    template: "%s | Dome Media",
  },
  description: "Dome Media es una agencia boutique especializada en marketing digital para clínicas estéticas y cirujanos plásticos. Incrementamos tu facturación mediante estrategias de tráfico cualificado y posicionamiento de marca de lujo.",
  keywords: [
    "Dome Media",
    "agencia boutique marketing",
    "marketing para clínicas estéticas",
    "marketing para cirujanos plásticos",
    "agencia de marketing digital boutique",
    "marketing médico estético",
    "estrategias de marketing para clínicas",
    "marketing digital clínicas estéticas",
    "agencia boutique",
    "marketing de lujo",
  ],
  authors: [{ name: "Dome Media" }],
  creator: "Dome Media",
  publisher: "Dome Media",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://domemedia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Dome Media",
    title: "Dome Media - Agencia Boutique de Marketing para Clínicas Estéticas",
    description: "Agencia boutique especializada en marketing digital para clínicas estéticas y cirujanos plásticos. Estrategias de tráfico cualificado y posicionamiento de marca de lujo.",
    images: [
      {
        url: "/domemedia-cutted.png",
        width: 1200,
        height: 630,
        alt: "Dome Media - Agencia Boutique de Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dome Media - Agencia Boutique de Marketing para Clínicas Estéticas",
    description: "Agencia boutique especializada en marketing digital para clínicas estéticas y cirujanos plásticos.",
    images: ["/domemedia-cutted.png"],
    creator: "@domemedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Hedvig+Letters+Serif:opsz@12..24&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        style={hedvigLettersSerif.style}
      >
        {children}
      </body>
    </html>
  );
}
