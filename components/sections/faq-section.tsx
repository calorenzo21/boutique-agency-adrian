"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: "item-1",
    question: "¿Cómo funciona su proceso de consultoría?",
    answer:
      "Comenzamos con una consultoría gratuita donde analizamos tu situación actual, objetivos y desafíos. Luego diseñamos una estrategia personalizada y la implementamos mientras monitoreamos resultados constantemente para optimizar el rendimiento.",
  },
  {
    id: "item-2",
    question: "¿En qué industrias se especializan?",
    answer:
      "Nos especializamos en clínicas estéticas, cirujanos plásticos y marcas premium del sector salud y belleza. Nuestro enfoque boutique nos permite ofrecer estrategias altamente personalizadas para este nicho específico.",
  },
  {
    id: "item-3",
    question: "¿Cuánto tiempo toma ver resultados?",
    answer:
      "Los primeros resultados suelen verse entre 30-60 días, dependiendo de tu situación inicial. Sin embargo, construimos sistemas de crecimiento sostenible diseñados para generar resultados a largo plazo y escalables.",
  },
  {
    id: "item-4",
    question: "¿Ofrecen consultorías puntuales?",
    answer:
      "Sí, ofrecemos tanto consultorías individuales como programas de acompañamiento continuo. Durante la consultoría inicial evaluamos qué opción se adapta mejor a tus necesidades y objetivos específicos.",
  },
  {
    id: "item-5",
    question: "¿Pueden las pequeñas clínicas permitirse sus servicios?",
    answer:
      "Trabajamos con clínicas de diferentes tamaños. Al tener disponibilidad limitada (3 proyectos), nos enfocamos en maximizar el ROI de cada cliente. En la consultoría gratuita evaluamos si existe un fit mutuo y exploramos opciones adaptadas a tu presupuesto.",
  },
  {
    id: "item-6",
    question: "¿Cómo empiezo?",
    answer:
      "Simplemente agenda tu consultoría gratuita usando el botón en esta página. En esa sesión conoceremos tu negocio, responderemos tus preguntas específicas y te presentaremos una propuesta preliminar sin compromiso.",
  },
];

export function FAQSection() {
  return (
    <section id="preguntas" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge
            variant="outline"
            className="border-burgundy text-burgundy bg-burgundy/10 px-4 py-2 font-inter mb-6 text-sm md:text-base"
          >
            FAQ
          </Badge>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-hedvig font-bold text-black mb-6">
            Respuestas a tus{" "}
            <span className="text-burgundy">preguntas más frecuentes</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={faq.id}
                  className="px-6 md:px-8"
                >
                  <AccordionTrigger className="text-left font-inter font-semibold text-base md:text-lg xl:text-xl text-black py-6 hover:no-underline cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-inter leading-relaxed text-sm md:text-lg xl:text-xl pb-6 pt-0 cursor-pointer">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
