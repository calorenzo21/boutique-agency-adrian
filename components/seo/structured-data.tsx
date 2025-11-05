export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://domemedia.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dome Media",
    url: baseUrl,
    logo: `${baseUrl}/domemedia-cutted.png`,
    description:
      "Agencia boutique especializada en marketing digital para clínicas estéticas y cirujanos plásticos. Estrategias de tráfico cualificado y posicionamiento de marca de lujo.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+58-424-9172826",
      contactType: "customer service",
      email: "riveradrian@dome-media.com",
      availableLanguage: ["Spanish"],
    },
    sameAs: [
      // Add social media URLs when available
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "VE",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Marketing Digital Boutique",
    provider: {
      "@type": "Organization",
      name: "Dome Media",
      url: baseUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Venezuela",
    },
    description:
      "Servicios de marketing digital boutique especializados en clínicas estéticas y cirujanos plásticos. Estrategias de tráfico cualificado, posicionamiento de marca de lujo y adquisición de clientes cualificados.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Marketing Digital",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tráfico Cualificado",
            description:
              "Dirigimos tráfico cualificado a través de múltiples canales garantizando oportunidades de ventas continuas y un crecimiento para tu negocio",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Visibilidad y Posicionamiento",
            description:
              "Posicionamos tus servicios o productos frente a audiencias altamente receptivas, aumentando la probabilidad de conversión y maximizando el retorno de inversión",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Estrategias de Marketing",
            description:
              "Creamos estrategias basadas en la comprensión psicológica del consumidor y algoritmos avanzados para captar su atención de manera efectiva",
          },
        },
      ],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#organization`,
    name: "Dome Media",
    image: `${baseUrl}/domemedia-cutted.png`,
    description:
      "Agencia boutique especializada en marketing digital para clínicas estéticas y cirujanos plásticos.",
    url: baseUrl,
    telephone: "+58-424-9172826",
    email: "riveradrian@dome-media.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "VE",
    },
    geo: {
      "@type": "GeoCoordinates",
      // Add coordinates if available
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: baseUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}

