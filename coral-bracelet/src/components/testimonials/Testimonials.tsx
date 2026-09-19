"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Priya",
    role: "Coral Bracelet Customer",
    text: "The bracelet looked even prettier in person. The packaging was beautiful and the whole experience felt so thoughtful.",
  },
  {
    name: "Ananya",
    role: "Coral Bracelet Customer",
    text: "I bought one for myself and ended up ordering another as a gift. The design is simple, elegant and very easy to style.",
  },
  {
    name: "Riya",
    role: "Coral Bracelet Customer",
    text: "I loved how meaningful the bracelet felt. It is one of those small things that instantly makes an outfit feel special.",
  },
  {
    name: "Aarushi",
    role: "Coral Bracelet Customer",
    text: "Beautiful design, comfortable to wear and perfect for everyday outfits. It genuinely feels handmade with love.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  const previousReview = () => {
    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const review = reviews[current];

  return (
    <section
      id="reviews"
      className="bg-[#fbf8fd] px-6 py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* ============================
            HEADING
        ============================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#6e3cbc]">
            Customer Love
          </p>

          <h2 className="text-4xl leading-tight text-[#18131d] md:text-5xl lg:text-6xl">
            Loved By Dreamers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            Real stories from people who wear Coral Bracelet
            as a reminder of the future they are building.
          </p>
        </motion.div>

        {/* ============================
            REVIEW CARD
        ============================= */}

        <div className="relative mx-auto mt-12 max-w-4xl">

          <div className="overflow-hidden rounded-[32px] border border-[#eee6f3] bg-white px-7 py-10 shadow-[0_18px_50px_rgba(62,29,81,0.08)] md:px-12 md:py-12">

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={19}
                      fill="currentColor"
                      className="text-[#d4af37]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="mt-7 text-5xl leading-none text-[#e8d8ff]">
                  “
                </div>

                <blockquote className="mx-auto mt-2 max-w-3xl text-lg leading-relaxed text-[#3f3744] md:text-xl">
                  {review.text}
                </blockquote>

                {/* Customer */}
                <div className="mt-8">
                  <p className="text-lg font-semibold text-[#18131d]">
                    {review.name}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {review.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-9 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={previousReview}
                aria-label="Previous review"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded4e7] text-[#6e3cbc] transition hover:border-[#6e3cbc] hover:bg-[#f5effb]"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2 px-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrent(index)}
                    aria-label={`Go to review ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index
                        ? "w-7 bg-[#6e3cbc]"
                        : "w-2 bg-[#d9cce5]"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextReview}
                aria-label="Next review"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded4e7] text-[#6e3cbc] transition hover:border-[#6e3cbc] hover:bg-[#f5effb]"
              >
                <ChevronRight size={18} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}