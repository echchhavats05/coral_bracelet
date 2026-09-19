"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Pearl Bracelets",
    description: "Timeless and elegant pieces for every occasion.",
    image: "/images/pearl/pearl1.jpeg",
    href: "/products/pearl-bracelets",
  },
  {
    id: 2,
    name: "Crystal Bracelets",
    description: "Sparkling designs with color and personality.",
    image: "/images/crystal/crystal1.jpeg",
    href: "/products/crystal-bracelets",
  },
  {
    id: 3,
    name: "Beaded Bracelets",
    description: "Playful handmade designs made to express you.",
    image: "/images/beaded/beaded1.jpeg",
    href: "/products/beaded-bracelets",
  },
  {
    id: 4,
    name: "Charm Bracelets",
    description: "Meaningful charms made to tell your story.",
    image: "/images/charm/charm1.jpeg",
    href: "/products/charm-bracelets",
  },
  {
    id: 5,
    name: "Self-Love Collection",
    description: "A little reminder to always choose yourself.",
    image: "/images/selflove/sl1.jpeg",
    href: "/products/self-love",
  },
  {
    id: 6,
    name: "Gift Collection",
    description: "Thoughtful pieces for beautiful moments.",
    image: "/images/gift/gift1.jpeg",
    href: "/products/gift-collection",
  },
  {
    id: 7,
    name: "Friendship Bracelets",
    description: "Created for the people who make life special.",
    image: "/images/friendship/friendship1.jpeg",
    href: "/products/friendship-bracelets",
  },
  {
    id: 8,
    name: "Minimalist Collection",
    description: "Simple, refined and effortless everyday pieces.",
    image: "/images/minimalist/minimalist1.jpeg",
    href: "/products/minimalist",
  },
  {
    id: 9,
    name: "Statement Collection",
    description: "Bold pieces designed to stand out.",
    image: "/images/statement/statement1.jpeg",
    href: "/products/statement",
  },
];

export default function RelatedProducts() {
  return (
    <section className="mt-24 border-t border-[#eee6f2] pt-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6e3cbc]">
          Explore More
        </p>

        <h2 className="mt-3 text-4xl text-[#18131d] md:text-5xl">
          Find Your Next Favourite
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Explore more handcrafted collections from Coral Bracelet.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {collections.map((collection, index) => (
          <motion.article
            key={collection.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            className="group overflow-hidden rounded-[26px] bg-white shadow-[0_10px_30px_rgba(46,19,69,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(46,19,69,0.12)]"
          >
            <Link href={collection.href} className="block">
              {/* Image */}
              <div className="relative h-[300px] overflow-hidden bg-[#f4eff8]">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">
                    Collection
                  </p>

                  <h3 className="mt-1 text-3xl">
                    {collection.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="flex min-h-[150px] flex-col p-5">
                <p className="leading-relaxed text-gray-600">
                  {collection.description}
                </p>

                <div className="mt-auto flex items-center gap-2 pt-5 font-semibold text-[#6e3cbc]">
                  Explore Collection

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}