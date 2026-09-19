"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <section
      id="contact"
      className="px-6 py-8 md:px-10 md:py-10"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#7118dc] via-[#8d24e8] to-[#dd4cab] px-6 py-12 text-center shadow-[0_20px_50px_rgba(111,43,170,0.20)] md:px-12 md:py-14"
        >

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-pink-300/15 blur-3xl" />

          <div className="relative z-10">

            {/* Eyebrow */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/75">
              Stay Inspired
            </p>

            {/* Main Heading */}
            <div className="mx-auto mt-4 max-w-[950px] text-center">
              <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.025em] text-white sm:text-5xl md:text-6xl lg:text-[76px]">
                <span className="block">
                  Your Dreams Deserve
                </span>

                <span className="mt-2 block">
                  A Reminder.
                </span>
              </h2>
            </div>

            {/* ============================
                DESCRIPTION
            ============================= */}

            <div className="mx-auto mt-6 max-w-[900px] text-center">
              <p className="text-sm leading-7 text-white/90 md:text-base">
                <span className="block">
                  Be the first to discover new collections, exclusive launches
                </span>

                <span className="block">
                  and special offers from Coral Bracelet.
                </span>
              </p>
            </div>

            {/* Email Form */}
            {!subscribed ? (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-2xl flex-col gap-2 rounded-full bg-white/10 p-1.5 backdrop-blur-sm sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="Enter your email address"
                  required
                  className="h-12 flex-1 rounded-full border-0 bg-white px-5 text-sm text-[#18131d] outline-none placeholder:text-gray-400"
                />

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#6e3cbc] transition hover:bg-[#f8f3ff]"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#6e3cbc]"
              >
                <Check size={17} />

                You&apos;re on the list.
                Welcome to Coral Bracelet.
              </motion.div>
            )}

            {/* Brand */}
            <div className="mt-8 text-center">
              <p className="font-serif text-xl text-white md:text-2xl">
                Wear Your Dreams.
              </p>

              <p className="mt-1 text-xs text-white/65">
                Handmade with love.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}