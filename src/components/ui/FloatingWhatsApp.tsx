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
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-4 text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-whatsapp/30 motion-safe:animate-pulse sm:h-14 sm:px-5"
    >
      <MessageCircle size={26} aria-hidden="true" />
      <span className="hidden text-sm font-bold sm:inline">¿Hablamos?</span>
    </a>
  );
}
