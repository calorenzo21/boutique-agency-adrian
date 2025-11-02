"use client";

import { useEffect } from "react";

function ScrollHandlerInner() {
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

    // También escuchar cambios en la URL
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '');
      if (newHash) {
        scrollToSection(newHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return null; // Este componente no renderiza nada
}

export function ScrollHandler() {
  return <ScrollHandlerInner />;
}

