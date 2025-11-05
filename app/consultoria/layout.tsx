import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoría Gratuita - Dome Media | Agencia Boutique Marketing",
  description: "Agenda una consultoría gratuita de 30 minutos con Dome Media. Descubre cómo transformar tu clínica estética o cirugía plástica en una marca de lujo que atrae clientes cualificados mediante estrategias de marketing digital boutique.",
  keywords: [
    "consultoría marketing clínicas estéticas",
    "agencia boutique consultoría gratuita",
    "marketing para cirujanos plásticos",
    "consultoría marketing digital",
    "Dome Media consultoría",
  ],
  openGraph: {
    title: "Consultoría Gratuita - Dome Media | Agencia Boutique Marketing",
    description: "Agenda una consultoría gratuita de 30 minutos y descubre cómo transformar tu clínica estética en una marca de lujo mediante estrategias de marketing digital boutique.",
    type: "website",
    url: "/consultoria",
    siteName: "Dome Media",
    images: [
      {
        url: "/domemedia-cutted.png",
        width: 1200,
        height: 630,
        alt: "Dome Media - Consultoría Gratuita",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría Gratuita - Dome Media",
    description: "Agenda una consultoría gratuita de 30 minutos y descubre cómo transformar tu clínica estética en una marca de lujo.",
    images: ["/domemedia-cutted.png"],
  },
  alternates: {
    canonical: "/consultoria",
  },
};

export default function ConsultoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
