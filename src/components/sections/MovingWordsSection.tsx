"use client";

import { motion } from "framer-motion";

import { movingWords } from "@/data/portfolio.data";

export function MovingWordsSection() {
  const words = [...movingWords, ...movingWords];

  return (
    <section className="overflow-hidden border-y-4 border-gold-500 bg-white py-6">
      <motion.div
        className="flex min-w-max gap-8 whitespace-nowrap bg-[linear-gradient(90deg,rgba(212,175,55,0.2)_0%,rgba(212,175,55,0.55)_45%,rgba(201,162,39,0.24)_100%)] py-4 shadow-[0_18px_55px_rgba(212,175,55,0.2)]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 34, ease: "linear", repeat: Infinity }}
      >
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={
              index % 2 === 0
                ? "font-serifDisplay text-2xl font-semibold uppercase tracking-[0.14em] text-forest-900/86 drop-shadow-[0_0_14px_rgba(14,90,71,0.18)] md:text-4xl"
                : "font-serifDisplay text-2xl font-semibold uppercase tracking-[0.14em] text-royal-700 md:text-4xl"
            }
          >
            {word}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
