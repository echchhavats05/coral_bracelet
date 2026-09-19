"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { collections } from "@/data/products";

export default function FeaturedCollections() {
  return (
    <section
      id="collections"
      className="bg-[#fcf9fd] px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* ============================
            SECTION HEADING
        ============================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#6e3cbc]">
            Shop Our Collections
          </p>

          <h2 className="text-4xl leading-tight text-[#18131d] md:text-5xl lg:text-6xl">
            Find Your Kind Of Beautiful.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            From timeless pearls to bold statement pieces,
            discover handcrafted bracelets made for every
            mood, moment and story.
          </p>
        </motion.div>

        {/* ============================
            COLLECTION GRID
        ============================= */}

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <motion.article
              key={collection.slug}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: Math.min(index * 0.05, 0.4),
              }}
              className="group"
            >
              <Link
  href={`/products/${collection.slug}`}
  className="block h-full overflow-hidden rounded-[30px] bg-white shadow-[0_12px_35px_rgba(46,19,69,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(46,19,69,0.15)]"
>

                {/* ============================
                    IMAGE
                ============================= */}

                <div className="relative h-[380px] overflow-hidden bg-[#f2edf7]">

                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    priority={index < 3}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Collection text */}
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/75">
                      {collection.eyebrow}
                    </p>

                    <h3 className="text-3xl leading-tight md:text-4xl">
                      {collection.title}
                    </h3>
                  </div>
                </div>

                {/* ============================
                    CARD DESCRIPTION
                ============================= */}

                <div className="flex min-h-[175px] flex-col p-6">

                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    {collection.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-6">

                    <span className="font-semibold text-[#6e3cbc]">
                      Explore Collection
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5effb] text-[#6e3cbc] transition-all duration-300 group-hover:bg-[#6e3cbc] group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </span>

                  </div>
                </div>

              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}