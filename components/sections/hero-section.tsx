"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="bg-gray-50 pt-20 pb-8 px-4 md:px-6">
      <div className="xl:container mx-auto">
        {/* Main Container with Rounded Borders */}
        <motion.div
          className="relative bg-[#6B0F2A] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>

          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12 items-center p-8 md:p-12 lg:p-16">
            {/* Left Column - Content */}
            <div className="space-y-8 lg:space-y-10 lg:col-span-4">
              {/* Rating Badge */}
              <motion.div
                className="inline-flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-[#fffabf]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-hedvig font-normal leading-tight text-white">
                  Agencia especializada{" "}
                  <br />
                  en tu{" "}
                  <span className="text-[#fffabf]">
                    crecimiento
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="text-base md:text-lg lg:text-xl text-gray-200 font-inter leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Ayudamos a incrementar la facturación de clínicas estéticas y
                cirujanos plásticos mediante la adquisición de clientes cualificados
                con estrategias de tráfico altamente precisas
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-row gap-3 sm:gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Link href="/consultoria">
                  <Button
                    size="lg"
                    className="bg-white text-[#6B0F2A] hover:bg-gray-50 hover:scale-105 font-inter font-semibold pl-4 sm:pl-6 pr-2 sm:pr-4 py-3 sm:py-6 text-sm sm:text-base md:text-lg rounded-full transition-smooth group shadow-lg flex items-center gap-3 sm:gap-4 cursor-pointer"
                  >
                    <span className="whitespace-nowrap">Consultoría Gratuita</span>
                    <div className="bg-[#8B1538] rounded-full p-1.5 sm:p-2 group-hover:bg-[#6B0F2A] transition-colors">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                  </Button>
                </Link>

                <Button
                  onClick={() => scrollToSection("metodo")}
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:scale-105 font-inter font-semibold px-4 sm:px-6 py-3 sm:py-6 text-sm sm:text-base md:text-lg rounded-full transition-smooth flex-shrink-0 cursor-pointer"
                >
                  Método
                </Button>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <div className="relative lg:col-span-2 flex justify-center lg:justify-start">
              <motion.div
                className="relative w-full max-w-md lg:max-w-none"
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/surgeon.png"
                    alt="Cirugía estética profesional - Clínica de lujo"
                    width={600}
                    height={700}
                    className="w-full h-[500px] lg:h-[650px] object-cover object-top"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
