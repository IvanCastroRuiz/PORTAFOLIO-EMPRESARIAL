"use client";

import { motion } from "framer-motion";

import { movingWords } from "@/data/portfolio.data";

export function MovingWordsSection() {
  const words = [...movingWords, ...movingWords];

  return (
    <section className="overflow-hidden border-y border-gold-500/20 bg-forest-950 py-6">
      <motion.div
        className="flex min-w-max gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 34, ease: "linear", repeat: Infinity }}
      >
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={index % 2 === 0 ? "font-serifDisplay text-2xl font-semibold uppercase tracking-[0.14em] text-gold-500 md:text-4xl" : "font-serifDisplay text-2xl font-semibold uppercase tracking-[0.14em] text-white/82 md:text-4xl"}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
