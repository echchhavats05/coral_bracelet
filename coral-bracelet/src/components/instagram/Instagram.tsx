"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiInstagram } from "react-icons/si";

const instagramImages = [
  {
    image: "/images/dream/dream1.jpeg",
    alt: "Coral Bracelet Dream Builder",
  },
  {
    image: "/images/dream/dream2.jpeg",
    alt: "Coral Bracelet Dream Builder design",
  },
  {
    image: "/images/dream/dream3.jpeg",
    alt: "Coral Bracelet Dream Builder bracelet",
  },
  {
    image: "/images/selflove/sl1.jpeg",
    alt: "Coral Bracelet Self Love",
  },
  {
    image: "/images/selflove/sl2.jpeg",
    alt: "Coral Bracelet Self Love design",
  },
  {
    image: "/images/selflove/sl3.jpeg",
    alt: "Coral Bracelet Self Love bracelet",
  },
  {
    image: "/images/success/success1.jpg",
    alt: "Coral Bracelet Success collection",
  },
  {
    image: "/images/success/success2.jpg",
    alt: "Coral Bracelet Success design",
  },
];

const instagramUrl =
  "https://www.instagram.com/coral_bracelet/";

export default function Instagram() {
  return (
    <section
      id="instagram"
      className="bg-white px-6 pb-10 pt-20 md:px-10 md:pb-12 md:pt-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================================
            HEADING
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#6e3cbc]">
            Follow The Journey
          </p>

          <h2 className="text-4xl leading-[1.05] text-[#18131d] md:text-5xl lg:text-6xl">
            Join The Coral Bracelet Family
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            A growing community of dreamers, creators, achievers
            <br className="hidden md:block" />
            and believers.
          </p>

          {/* Instagram profile */}
          <motion.a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="mt-7 inline-flex items-center gap-3 text-lg font-semibold text-[#6e3cbc] transition-all duration-300 hover:text-[#54279d]"
          >
            <SiInstagram size={25} />

            <span>@coral_bracelet</span>

            <ArrowUpRight size={19} />
          </motion.a>
        </motion.div>

        {/* ================================
            IMAGE GRID
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5"
        >
          {instagramImages.map((item, index) => (
            <motion.a
              key={`${item.image}-${index}`}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{ y: -5 }}
              className="group relative aspect-square overflow-hidden rounded-[24px] bg-[#f5effb]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#6e3cbc]/0 transition-all duration-500 group-hover:bg-[#6e3cbc]/40" />

              {/* Instagram icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-xl backdrop-blur-sm">
                  <SiInstagram
                    size={25}
                    className="text-[#E1306C]"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* ================================
            BUTTON
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#6e3cbc] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5b2fa0]"
          >
            <SiInstagram size={19} />

            <span>Follow Us on Instagram</span>

            <ArrowUpRight size={17} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}