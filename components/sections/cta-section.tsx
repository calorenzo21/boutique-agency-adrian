"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-[#6B0F2A] relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05),transparent_50%)]" />
      </div> */}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-6xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl xl:text-7xl font-hedvig font-normal text-white leading-tight">
            ¿Listo para transformar tu clínica
            <br />
            en una{" "}
            <span className="text-[#fffabf]">marca de lujo</span>?
          </h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl xl:text-2xl text-gray-200 font-inter leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Agenda una consultoría sin compromiso y descubre cómo podemos
            multiplicar tus resultados
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/consultoria">
              <Button
                size="lg"
                className="bg-white text-[#6B0F2A] hover:bg-gray-50 hover:scale-105 font-inter font-semibold pl-8 pr-4 py-6 text-base md:text-xl rounded-full transition-smooth group shadow-lg gap-4 cursor-pointer"
              >
                <span>Consultoría Gratuita</span>
                <div className="bg-[#8B1538] rounded-full p-2 group-hover:bg-[#6B0F2A] transition-colors">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </Button>
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="flex justify-center items-center space-x-8 pt-12 opacity-30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-px bg-white" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-16 h-px bg-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
