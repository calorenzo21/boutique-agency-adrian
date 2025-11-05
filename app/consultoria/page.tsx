"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { FooterLight } from "@/components/layout/footer-light";
import { ArrowLeft, Calendar, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ConsultoriaPage() {
  useEffect(() => {
    // Agregar estilos personalizados para el calendario de Google
    const style = document.createElement('style');
    style.textContent = `
      /* Intentar personalizar el calendario de Google */
      .google-calendar-wrapper {
        position: relative;
        background: linear-gradient(135deg, #6B0F2A 0%, #8B1538 100%);
        padding: 2px;
        border-radius: 18px;
      }
      
      .google-calendar-inner {
        background: white;
        border-radius: 16px;
        overflow: hidden;
      }
      
      /* Efectos de hover para el contenedor */
      .google-calendar-wrapper:hover {
        box-shadow: 0 20px 40px rgba(107, 15, 42, 0.3);
        transform: translateY(-2px);
        transition: all 0.3s ease;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const benefits = [
    {
      icon: Calendar,
      title: "Análisis Personalizado",
      description: "Evaluamos tu situación actual y objetivos específicos"
    },
    {
      icon: Clock,
      title: "30 Minutos Gratuitos",
      description: "Sesión completa sin compromiso ni costos ocultos"
    },
    {
      icon: CheckCircle,
      title: "Estrategia Preliminar",
      description: "Te presentamos una propuesta inicial adaptada a tu negocio"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navbar />

      <main className="pt-20">
        {/* Header Section */}
        <section className="bg-gray-50 py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Back Button */}
              <Link
                href="/"
                className="inline-flex items-center text-[#6B0F2A] hover:text-[#8B1538] transition-colors font-medium mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al inicio
              </Link>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-hedvig font-semibold text-black leading-tight">
                Agenda tu consultoría{" "}
                <span className="text-[#6B0F2A]">gratuita</span>
              </h1>

              <p className="text-xl text-gray-600 font-inter leading-relaxed max-w-3xl mx-auto">
                Descubre cómo podemos transformar tu clínica estética en una marca de lujo
                que atrae clientes cualificados de forma consistente
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-[#6B0F2A]">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-[#fffabf]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-[#fffabf]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gray-50 rounded-3xl p-6 lg:p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-hedvig font-semibold text-[#6B0F2A] mb-4">
                    Selecciona tu horario preferido
                  </h2>
                  <p className="text-gray-600">
                    Elige el momento que mejor se adapte a tu agenda
                  </p>
                </div>

                {/* Google Calendar Widget Container */}
                <div className="google-calendar-wrapper transition-all duration-300">
                  <div className="google-calendar-inner">
                    <iframe
                      src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0pqsq-uyFHRlAnzKcnkJtne6qsCA6XZIzXCyhzqKzc5Miq7a5dICtcBbQu6mLSfm_uGzDtr4eQ?gv=true"
                      style={{
                        border: 0,
                        width: '100%',
                        height: '600px',
                        display: 'block'
                      }}
                      width="100%"
                      height="600"
                      frameBorder="0"
                      title="Agenda tu consultoría gratuita"
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Información adicional debajo del calendario */}
                <div className="mt-6 p-4 bg-[#6B0F2A]/5 rounded-xl border border-[#6B0F2A]/10">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-[#6B0F2A]" />
                    <span>Selecciona tu horario preferido y recibirás una confirmación por email</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-12 lg:py-16 bg-[#6B0F2A]">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-hedvig font-normal text-white">
                ¿Qué puedes esperar de la consultoría?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#fffabf]">
                    Durante la llamada analizaremos:
                  </h3>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#fffabf] mr-3 mt-0.5 flex-shrink-0" />
                      Tu situación actual y objetivos de crecimiento
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#fffabf] mr-3 mt-0.5 flex-shrink-0" />
                      Oportunidades de mejora en tu estrategia actual
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#fffabf] mr-3 mt-0.5 flex-shrink-0" />
                      Cómo atraer clientes de mayor valor
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#fffabf] mr-3 mt-0.5 flex-shrink-0" />
                      Estrategias específicas para tu nicho
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#fffabf]">
                    Al finalizar tendrás:
                  </h3>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#fffabf] mr-3 mt-0.5 flex-shrink-0" />
                      Una hoja de ruta clara para tu crecimiento
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#fffabf] mr-3 mt-0.5 flex-shrink-0" />
                      Recomendaciones específicas y accionables
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#fffabf] mr-3 mt-0.5 flex-shrink-0" />
                      Una propuesta personalizada (si hay fit mutuo)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#fffabf] mr-3 mt-0.5 flex-shrink-0" />
                      Claridad sobre los próximos pasos
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterLight />
    </div>
  );
}
