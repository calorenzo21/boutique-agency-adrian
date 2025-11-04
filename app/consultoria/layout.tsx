import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoría Gratuita - Dome Media | Agenda tu Sesión",
  description: "Agenda una consultoría gratuita de 30 minutos y descubre cómo transformar tu clínica estética en una marca de lujo que atrae clientes cualificados.",
  openGraph: {
    title: "Consultoría Gratuita - Dome Media",
    description: "Agenda una consultoría gratuita de 30 minutos y descubre cómo transformar tu clínica estética en una marca de lujo.",
    type: "website",
  },
};

export default function ConsultoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
