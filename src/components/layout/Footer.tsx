import { Linkedin, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

import { profile } from "@/data/portfolio.data";
import { whatsappMessage } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-gold-500/40 bg-gold-500 px-5 py-10 text-forest-950 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-[1.15fr_0.85fr] md:items-end md:text-left">
        <div className="mx-auto max-w-2xl md:mx-0">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
            <span className="relative block h-16 w-44 shrink-0 overflow-hidden sm:h-[72px] sm:w-52">
              <Image
                src="/images/logo-mcr-final.png"
                alt="Milagros Castro Ruiz"
                fill
                sizes="208px"
                className="object-contain"
              />
            </span>
            <div>
              <p className="font-serifDisplay text-2xl font-semibold text-forest-950">
                {profile.fullName}
              </p>
              <p className="text-sm font-semibold text-forest-900">{profile.role}</p>
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-forest-950/78">
            {profile.specialties}
          </p>
          <p className="mt-4 text-xs text-forest-950/62">
            © 2026 Milagros Castro Ruiz. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 md:items-end">
          <a className="inline-flex items-center gap-2 text-sm font-semibold text-forest-950 hover:text-white" href={`mailto:${profile.email}`}>
            <Mail size={17} /> {profile.email}
          </a>
          <a className="inline-flex items-center gap-2 text-sm font-semibold text-forest-950 hover:text-white" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={17} /> LinkedIn
          </a>
          <a className="inline-flex items-center gap-2 text-sm font-semibold text-forest-950 hover:text-white" href={buildWhatsAppUrl(profile.whatsapp, whatsappMessage)} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={17} /> WhatsApp
          </a>
        </div>
      </div>
      <div className="mx-auto mt-9 flex max-w-7xl flex-col items-center border-t border-forest-950/12 pt-6 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-forest-950/72">
          CREADO POR CASTRO Y CESPEDES
        </p>
        <div className="relative mt-3 h-10 w-44 overflow-hidden opacity-85 sm:h-12 sm:w-56">
          <Image
            src="/images/logo-castro-cespedes.png"
            alt="Castro y Cespedes Development"
            fill
            sizes="224px"
            className="object-contain"
          />
        </div>
        <a
          href="https://wa.me/573004107145"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-xs font-semibold tracking-[0.14em] text-forest-950/70 transition hover:text-white"
        >
          WhatsApp +57 3004107145
        </a>
        <a
          href="mailto:castroycespedes@gmail.com"
          className="mt-1 text-xs font-semibold tracking-[0.08em] text-forest-950/70 transition hover:text-white"
        >
          castroycespedes@gmail.com
        </a>
      </div>
    </footer>
  );
}
