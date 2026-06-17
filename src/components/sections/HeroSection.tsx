"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Image from "next/image";

import { heroIndicators, profile, referenceImages } from "@/data/portfolio.data";
import { whatsappMessage } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-forest-950 px-5 pt-28 text-white lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(212,175,55,0.16),transparent_27%),radial-gradient(circle_at_82%_8%,rgba(27,77,138,0.42),transparent_30%),linear-gradient(135deg,#1B4D8A_0%,#0E5A47_48%,#0B6B57_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ivory to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-500">
            PORTAFOLIO PROFESIONAL
          </p>
          <p className="mt-5 font-serifDisplay text-3xl font-semibold text-gold-500 md:text-4xl">
            {profile.fullName}
          </p>
          <p className="mt-5 text-xl font-medium text-white md:text-2xl">
            {profile.role}
          </p>
          <p className="mt-2 text-base font-medium text-gold-500 md:text-lg">
            {profile.specialties}
          </p>
          <h1 className="mt-7 max-w-4xl font-serifDisplay text-4xl font-semibold leading-[1.06] text-white md:text-6xl">
            Asesoría legal, contable y tributaria con visión estratégica
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86">
            Acompaño a personas, emprendedores y empresas con soluciones integrales que unen el criterio jurídico, el análisis contable y la planeación tributaria.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppUrl(profile.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-forest-950 transition hover:bg-gold-400"
            >
              Agendar consulta <MessageCircle size={18} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 px-6 py-3 text-sm font-bold text-white transition hover:border-gold-500 hover:text-gold-500"
            >
              Ver servicios <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {heroIndicators.map((indicator) => (
              <div
                key={indicator}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/8 px-4 py-3 text-sm font-medium text-white/82 backdrop-blur"
              >
                <CheckCircle2 className="shrink-0 text-gold-500" size={18} />
                {indicator}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative overflow-hidden rounded-lg border border-gold-500/24 bg-white/10 p-4 shadow-glow backdrop-blur-xl md:p-6"
        >
          <div className="absolute right-6 top-6 z-10 flex h-20 w-20 items-center justify-center rounded-full border border-gold-500/60 bg-forest-950/82 font-serifDisplay text-3xl font-semibold text-gold-500 shadow-glow">
            {profile.initials}
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-md">
            <Image
              src={referenceImages.hero}
              alt="Imagen profesional temporal de Milagros Castro Ruiz"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/18 to-transparent" />
          </div>
          <div className="relative -mt-28 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
              Marca profesional
            </p>
            <p className="mt-3 font-serifDisplay text-3xl font-semibold text-white">
              {profile.initials} · {profile.shortRole}
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/86">
              Una presencia sobria, técnica y cercana para decisiones que requieren seguridad.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
