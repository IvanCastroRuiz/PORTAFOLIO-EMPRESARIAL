import { Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { profile, referenceImages } from "@/data/portfolio.data";
import { whatsappMessage } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const contactReferenceImages = [
  { src: referenceImages.legalOffice, title: "Referencia legal" },
  { src: referenceImages.accounting, title: "Referencia contable" },
  { src: referenceImages.caseThree, title: "Referencia tributaria" },
  { src: referenceImages.about, title: "Referencia profesional" }
];

export function ContactSection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-forest-950 px-5 py-24 text-white lg:px-8">
      <Image
        src={referenceImages.contact}
        alt="Contacto profesional"
        fill
        sizes="100vw"
        className="object-cover opacity-24"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/92 to-forest-950/75" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
            Contacto
          </p>
          <h2 className="mt-4 font-serifDisplay text-4xl font-semibold leading-tight text-gold-500 md:text-6xl">
            Hablemos de tus objetivos y diseñemos una estrategia segura
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86">
            Agenda una consulta o envía un mensaje para recibir orientación legal,
            contable o tributaria según tus necesidades.
          </p>

          <div className="mt-9 grid gap-4">
            <a
              href={buildWhatsAppUrl(profile.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/86 transition hover:text-gold-500"
            >
              <Phone size={19} className="text-gold-500" /> WhatsApp: {profile.whatsapp}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/86 transition hover:text-gold-500"
            >
              <Linkedin size={19} className="text-gold-500" /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 text-white/86 transition hover:text-gold-500"
            >
              <Mail size={19} className="text-gold-500" /> {profile.email}
            </a>
            <span className="inline-flex items-center gap-3 text-white/86">
              <MapPin size={19} className="text-gold-500" /> {profile.location}
            </span>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppUrl(profile.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-forest-950 transition hover:bg-gold-400"
            >
              Escribir por WhatsApp <MessageCircle size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/45 px-6 py-3 text-sm font-bold text-gold-500 transition hover:border-white hover:text-white"
            >
              Enviar correo <Mail size={18} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-lg border border-gold-500/24 bg-white/10 p-4 shadow-glow backdrop-blur-xl md:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactReferenceImages.map((item) => (
                <div key={item.title} className="group overflow-hidden rounded-md border border-white/12 bg-forest-950/50">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.src}
                      alt={`${item.title} temporal`}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/82 via-transparent to-transparent" />
                    <p className="absolute bottom-4 left-4 right-4 text-sm font-bold uppercase tracking-[0.16em] text-gold-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-md border border-gold-500/20 bg-forest-950/60 p-4 text-sm leading-7 text-white/86">
              Imágenes temporales de referencia. Cuando tengas las fotos finales,
              las reemplazamos conservando el mismo diseño.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
