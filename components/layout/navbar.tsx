"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    // Si estamos en la página principal, hacer scroll
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, navegar a la principal con el hash
      router.push(`/#${sectionId}`);
    }
  };

  const navItems = [
    { label: "Servicios", href: "servicios" },
    { label: "Método", href: "metodo" },
    { label: "Preguntas", href: "preguntas" },
    { label: "Contacto", href: "contacto" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-gray-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/domemedia-cutted.png"
                alt="Dome Media"
                width={160}
                height={40}
                className="h-8 lg:h-10 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-700 hover:text-burgundy transition-smooth font-inter font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link href="/consultoria">
              <Button
                className="bg-burgundy-dark hover:bg-burgundy hover:scale-105 text-white font-inter font-semibold px-6 py-3 rounded-full transition-smooth group cursor-pointer"
              >
                Consultoría Gratuita
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className="block w-full text-left text-gray-700 hover:text-burgundy transition-smooth font-inter font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <Link href="/consultoria" className="w-full">
                <Button
                  className="w-full bg-burgundy-dark hover:bg-burgundy text-white font-inter font-semibold mt-4 rounded-full cursor-pointer"
                >
                  Consultoría Gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
