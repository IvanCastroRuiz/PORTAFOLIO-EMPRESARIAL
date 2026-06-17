import { Linkedin, Mail, MessageCircle } from "lucide-react";

import { profile } from "@/data/portfolio.data";
import { whatsappMessage } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-gold-500/40 bg-gold-500 px-5 py-10 text-forest-950 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-forest-950/20 bg-forest-950 font-serifDisplay text-lg font-bold text-gold-500 shadow-[0_18px_50px_rgba(14,90,71,0.2)]">
              {profile.initials}
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
        <div className="flex flex-wrap gap-4 md:justify-end">
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
    </footer>
  );
}
