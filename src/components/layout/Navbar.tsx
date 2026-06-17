"use client";

import { CalendarCheck, Menu, X } from "lucide-react";
import { useState } from "react";

import { profile } from "@/data/portfolio.data";
import { siteNavigation, whatsappMessage } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-[linear-gradient(90deg,rgba(27,77,138,0.94)_0%,rgba(14,90,71,0.94)_56%,rgba(11,107,87,0.94)_100%)] shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Inicio">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-500/70 bg-gold-500 font-serifDisplay text-base font-bold text-forest-950 shadow-glow">
            {profile.initials}
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serifDisplay text-lg font-semibold leading-tight text-white">
              {profile.fullName}
            </span>
            <span className="block truncate text-xs font-medium uppercase tracking-[0.2em] text-gold-500">
              {profile.shortRole}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {siteNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-gold-500 transition hover:text-white focus:text-white active:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={buildWhatsAppUrl(profile.whatsapp, whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-forest-950 transition hover:-translate-y-0.5 hover:bg-gold-400 md:inline-flex"
        >
          Agendar consulta <CalendarCheck size={17} />
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[linear-gradient(135deg,#1B4D8A_0%,#0E5A47_58%,#0B6B57_100%)] px-5 py-5 shadow-2xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {siteNavigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-gold-500 hover:bg-white/8 hover:text-white focus:text-white active:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={buildWhatsAppUrl(profile.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-bold text-forest-950"
            >
              Agendar consulta <CalendarCheck size={17} />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
