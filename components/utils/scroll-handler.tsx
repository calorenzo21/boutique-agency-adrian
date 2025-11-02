"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Función para hacer scroll a una sección
    const scrollToSection = (sectionId: string) => {
      // Esperar un poco para que la página se cargue completamente
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    };

    // Verificar si hay hash en la URL
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      scrollToSection(hash);
    }
  }, [searchParams]);

  return null; // Este componente no renderiza nada
}

