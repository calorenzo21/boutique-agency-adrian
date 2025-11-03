"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface MethodStep {
  id: number;
  number: string;
  title: string;
  description: string;
  link: string;
  image: string;
  isReversed: boolean;
}

const methodSteps: MethodStep[] = [
  {
    id: 1,
    number: "01",
    title: "Análisis Profundo de Marca",
    description: "Nos encargamos de estudiar tu marca y resaltar sus rasgos diferenciales para crear una propuesta de valor única que resuene con tu audiencia ideal",
    link: "Conoce más →",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isReversed: false
  },
  {
    id: 2,
    number: "02",
    title: "Estrategia Personalizada",
    description: "Cada campaña es pensada, estudiada y estructurada cuidando cada detalle para garantizar su éxito. Diseñamos soluciones a medida que se alinean perfectamente con tus objetivos",
    link: "Conoce más →",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isReversed: true
  },
  {
    id: 3,
    number: "03",
    title: "Crecimiento Continuo",
    description: "Convertimos los resultados en sistemas de crecimiento continuo. Proporcionamos soporte constante, optimización y ajustes estratégicos para asegurar el éxito a largo plazo",
    link: "Conoce más →",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isReversed: false
  }
];

export function MethodSection() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to get animation values based on screen size and position
  const getAnimationValues = (isImageSide: boolean, isImageLeft: boolean) => {
    if (!mounted) {
      return { y: 50, x: 0 }; // Default mobile animation during SSR
    }

    if (isDesktop) {
      // Desktop animations: horizontal movement
      if (isImageSide) {
        return { y: 0, x: isImageLeft ? -100 : 100 }; // Image comes from its side
      } else {
        return { y: 0, x: isImageLeft ? 100 : -100 }; // Content comes from opposite side
      }
    } else {
      // Mobile animations: vertical movement
      return { y: 50, x: 0 };
    }
  };

  return (
    <section id="metodo" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <Badge
            variant="outline"
            className="border-burgundy text-burgundy bg-burgundy/10 px-4 py-2 font-inter mb-6 text-sm md:text-base"
          >
            Cómo trabajamos
          </Badge>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-hedvig font-bold text-black mb-8 leading-tight">
            Un proceso{" "}
            <span className="text-burgundy">comprobado</span>
            <br />
            para alcanzar tus objetivos más grandes
          </h2>

          <Button
            onClick={() => scrollToSection("contacto")}
            size="lg"
            className="bg-burgundy hover:bg-burgundy-dark hover:scale-105 text-white font-inter font-semibold px-8 py-6 text-lg transition-smooth group mb-12 rounded-full cursor-pointer"
          >
            Contáctanos
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <motion.p
            className="text-xl md:text-2xl font-hedvig font-bold text-black max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-burgundy">Excelencia, autenticidad</span> y resultados medibles y precisos
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 bg-burgundy opacity-40"
            style={{
              top: '16px',
              height: 'calc(100% - 32px)',
              zIndex: 0
            }} />

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {methodSteps.map((step, index) => {
              const isImageLeft = index % 2 === 0;

              return (
                <div key={step.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Step Number Circle - Always centered */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 bg-burgundy text-white rounded-full flex items-center justify-center font-hedvig font-bold text-lg shadow-lg"
                    style={{ zIndex: 20 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Image Side */}
                  <motion.div
                    className={`pl-24 md:pl-0 ${isImageLeft ? "md:order-1" : "md:order-2"}`}
                    initial={{
                      opacity: 0,
                      ...getAnimationValues(true, isImageLeft)
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      x: 0
                    }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={500}
                        height={300}
                        className="w-full h-48 md:h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <motion.div
                    className={`pl-24 md:pl-0 space-y-4 ${isImageLeft ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8"}`}
                    initial={{
                      opacity: 0,
                      ...getAnimationValues(false, isImageLeft)
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      x: 0
                    }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl md:text-3xl font-hedvig font-bold text-black">
                      {step.title}
                    </h3>

                    <p className="text-base md:text-lg text-gray-600 font-inter leading-relaxed">
                      {step.description}
                    </p>

                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
