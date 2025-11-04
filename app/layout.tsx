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
  title: "Dome Media - Agencia especializada en tu crecimiento",
  description: "Ayudamos a incrementar la facturación de clínicas estéticas y cirujanos plásticos mediante la adquisición de clientes cualificados con estrategias de tráfico altamente precisas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
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
