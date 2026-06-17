import { MessageCircle } from "lucide-react";

import { profile } from "@/data/portfolio.data";
import { whatsappMessage } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(profile.whatsapp, whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-[68px] w-[68px] items-center justify-center rounded-full border-4 border-white bg-gold-500 text-forest-950 shadow-[0_18px_45px_rgba(212,175,55,0.48),0_0_0_8px_rgba(14,90,71,0.16)] transition hover:-translate-y-1 hover:bg-white hover:text-forest-950 hover:shadow-[0_22px_55px_rgba(212,175,55,0.58),0_0_0_10px_rgba(27,77,138,0.18)] focus:outline-none focus:ring-4 focus:ring-gold-500/35"
    >
      <MessageCircle size={32} aria-hidden="true" />
    </a>
  );
}
