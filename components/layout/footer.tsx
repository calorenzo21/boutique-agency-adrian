"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, Facebook, Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuLinks = [
    { label: "Filosofía", href: "hero" },
    { label: "Servicio", href: "servicios" },
    { label: "Método", href: "metodo" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer id="contacto" className="bg-burgundy-dark text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1 - Branding */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-hedvig font-bold">Dome Media</h3>
            <p className="text-gray-300 font-inter leading-relaxed">
              Hacemos que tus experiencias hablen solo con clientes reales
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-burgundy hover:bg-white rounded-full flex items-center justify-center transition-smooth"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Menu */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-inter font-semibold uppercase tracking-wider">
              MENÚ
            </h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white hover:scale-105 transition-smooth font-inter cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-inter font-semibold uppercase tracking-wider">
              CONTACTO
            </h4>
            <div className="space-y-4">
              <motion.a
                href="mailto:riveradrian@dome-media.com"
                className="flex items-center text-gray-300 hover:text-white transition-smooth font-inter group"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-4 w-4 mr-3" />
                riveradrian@dome-media.com
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-smooth" />
              </motion.a>

              <motion.a
                href="https://wa.me/584249172826?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20marketing%20digital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-smooth font-inter group"
                whileHover={{ x: 5 }}
              >
                <MessageCircle className="h-4 w-4 mr-3" />
                WhatsApp: +58 424-9172826
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-smooth" />
              </motion.a>

              <Link href="/consultoria">
                <motion.div
                  className="flex items-center text-burgundy-light hover:text-white transition-smooth font-inter font-semibold group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Consultoría Gratuita
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-smooth" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-burgundy-light/20 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 font-inter">
            © 2025 Dome Media. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
