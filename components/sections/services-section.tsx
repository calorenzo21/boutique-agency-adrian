"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Tráfico Cualificado",
    description: "Estrategias de marketing digital para clínicas estéticas que dirigen tráfico cualificado a través de múltiples canales. Garantizamos oportunidades de ventas continuas y crecimiento sostenible para tu clínica de estética o cirugía plástica",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  },
  {
    id: 2,
    title: "Visibilidad y Posicionamiento",
    description: "Posicionamos tu clínica estética frente a audiencias altamente receptivas mediante estrategias de marketing médico estético. Aumentamos la probabilidad de conversión y maximizamos el retorno de inversión para cirujanos plásticos",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    id: 3,
    title: "Estrategias de Marketing Boutique",
    description: "Creamos estrategias de marketing boutique basadas en la comprensión psicológica del consumidor y algoritmos avanzados. Especialistas en marketing digital para clínicas estéticas que captan la atención de manera efectiva",
    image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg"
  }
];

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCardPosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return 0;
    if (diff === 1 || diff === -(services.length - 1)) return 1;
    if (diff === -1 || diff === services.length - 1) return -1;
    return 2; // Hidden
  };

  // Handle swipe gestures
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevSlide();
    } else if (info.offset.x < -swipeThreshold) {
      nextSlide();
    }
  };

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-gray-50 px-4 md:px-6">
      <div className="xl:container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <Badge
            variant="outline"
            className="border-burgundy text-burgundy bg-burgundy/10 px-4 py-2 font-inter mb-6 text-sm md:text-base"
          >
            Servicios
          </Badge>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-hedvig font-bold text-black mb-6 leading-tight">
            Servicios de Marketing Digital Boutique
            <br />
            para{" "}
            <span className="text-burgundy">Clínicas Estéticas</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-9xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 top-4/10 transform -translate-y-1/2 z-20 w-12 h-12 bg-burgundy hover:bg-burgundy-dark text-white rounded-full flex items-center justify-center transition-smooth shadow-lg cursor-pointer"
            aria-label="Previous service"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-6 top-4/10 transform -translate-y-1/2 z-20 w-12 h-12 bg-burgundy hover:bg-burgundy-dark text-white rounded-full flex items-center justify-center transition-smooth shadow-lg cursor-pointer"
            aria-label="Next service"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Cards Container - Infinite Carousel with Translate */}
          <motion.div
            className="flex items-center justify-center px-16 md:px-20 overflow-hidden cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <div className="relative w-full flex items-center justify-center" style={{ minHeight: '420px' }}>
              {services.map((service, index) => {
                const position = getCardPosition(index);

                if (position === 2) return null; // Hidden cards

                const isActive = position === 0;
                const translateX = position * 550; // Distance between cards

                return (
                  <motion.div
                    key={service.id}
                    className="absolute flex-shrink-0 "
                    style={{
                      width: isActive ? '700px' : '480px',
                      maxWidth: '90vw',
                    }}
                    animate={{
                      x: translateX,
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : 0.5,
                      filter: isActive ? 'blur(0px)' : 'blur(3px)',
                      zIndex: isActive ? 10 : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.32, 0.72, 0, 1] // Custom easing for smooth movement
                    }}
                    onClick={() => !isActive && goToSlide(index)}
                  >
                    <Card className="w-full overflow-hidden shadow-2xl hover:shadow-3xl transition-smooth rounded-3xl">
                      <CardContent className="p-0 relative" style={{ height: '400px' }}>
                        <div className="relative h-full">
                          <Image
                            src={service.image}
                            alt={`${service.title} - Dome Media agencia boutique especializada en marketing para clínicas estéticas`}
                            fill
                            className="object-cover"
                          />

                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

                          {/* Content */}
                          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
                            <div className="bg-[#6B0F2A] rounded-full px-6 py-1 w-fit">
                              <h3
                                className="text-3xl md:text-4xl font-hedvig font-bold text-white"
                              >
                                {service.title}
                              </h3>
                            </div>

                            <p
                              className="text-gray-200 font-inter leading-relaxed text-base md:text-lg max-w-2xl"
                            >
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-10 space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${index === currentIndex
                  ? "bg-burgundy w-8"
                  : "bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
