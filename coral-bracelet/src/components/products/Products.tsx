"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";

import { useWishlistStore } from "@/store/wishlistStore";
import { products } from "@/data/products";

const featuredIds = [
  101, // Pearl Whisper
  201, // Crystal Glow
  501, // Love Yourself
  401, // Little Wishes
  301, // Beaded Bliss
  901, // The Statement Piece
];

const selectedProducts = featuredIds
  .map((id) => products.find((product) => product.id === id))
  .filter(Boolean);

export default function ProductsSection() {
  const toggleWishlist = useWishlistStore(
    (state) => state.toggleWishlist
  );

  const wishlist = useWishlistStore(
    (state) => state.wishlist
  );

  const isWishlisted = (id: number) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <section
      id="featured-products"
      className="bg-white px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================================
            INTRO
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#6e3cbc]">
            The Coral Edit
          </p>

          <h2 className="text-4xl leading-tight text-[#18131d] md:text-5xl lg:text-6xl">
            A Few Pieces We Love.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            A curated selection of our most loved designs,
            handcrafted to add a little meaning to every moment.
          </p>
        </motion.div>

        {/* =========================================
            EDITORIAL GRID
        ========================================== */}

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

          {selectedProducts.map((product, index) => {
            if (!product) return null;

            const wishlisted = isWishlisted(product.id);

            /*
              Desktop layout:

              Pearl        = 2 columns × 2 rows
              Crystal      = 1 column
              Self Love    = 1 column
              Charm        = 1 column
              Beaded       = 1 column
              Statement    = full width

              This prevents the empty-space problem.
            */

            let gridClass = "";

            if (index === 0) {
              gridClass =
                "lg:col-span-2 lg:row-span-2";
            } else if (index === 1) {
              gridClass =
                "lg:col-span-1";
            } else if (index === 2) {
              gridClass =
                "lg:col-span-1";
            } else if (index === 3) {
              gridClass =
                "lg:col-span-1";
            } else if (index === 4) {
              gridClass =
                "lg:col-span-1";
            } else if (index === 5) {
              gridClass =
                "lg:col-span-4";
            }

            const isHero = index === 0;
            const isStatement = index === 5;

            return (
              <motion.article
                key={product.id}
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
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className={`group ${gridClass}`}
              >
                <div
                  className={`
                    relative
                    h-full
                    min-h-[320px]
                    overflow-hidden
                    rounded-[28px]
                    bg-[#f5eff9]
                    ${
                      isHero
                        ? "min-h-[520px]"
                        : isStatement
                          ? "min-h-[360px]"
                          : "min-h-[300px]"
                    }
                  `}
                >

                  {/* Product Image */}
                  <Link
                    href={product.productUrl}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes={
                        isHero
                          ? "(max-width: 1024px) 100vw, 50vw"
                          : isStatement
                            ? "100vw"
                            : "(max-width: 1024px) 100vw, 25vw"
                      }
                    />
                  </Link>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute left-5 top-5 z-10">
                      <span className="rounded-full bg-white/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6e3cbc] shadow-sm backdrop-blur-sm">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Wishlist */}
                  <button
                    type="button"
                    aria-label={
                      wishlisted
                        ? `Remove ${product.name} from wishlist`
                        : `Add ${product.name} to wishlist`
                    }
                    onClick={() =>
                      toggleWishlist({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        productUrl: product.productUrl,
                      })
                    }
                    className={`
                      absolute
                      right-5
                      top-5
                      z-10
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      shadow-md
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:scale-105
                      ${
                        wishlisted
                          ? "bg-pink-100 text-pink-600"
                          : "bg-white/90 text-[#6e3cbc]"
                      }
                    `}
                  >
                    <Heart
                      size={19}
                      fill={
                        wishlisted
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>

                  {/* Product Content */}
                  <div
                    className={`
                      absolute
                      bottom-0
                      left-0
                      right-0
                      z-10
                      p-6
                      md:p-8
                      ${
                        isStatement
                          ? "md:flex md:items-end md:justify-between"
                          : ""
                      }
                    `}
                  >
                    <div>

                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
                        {product.category}
                      </p>

                      <h3
                        className={`
                          mt-2
                          text-white
                          ${
                            isHero
                              ? "text-4xl md:text-5xl"
                              : isStatement
                                ? "text-4xl md:text-5xl"
                                : "text-2xl md:text-3xl"
                          }
                        `}
                      >
                        {product.name}
                      </h3>

                      <p
                        className={`
                          mt-2
                          text-white/90
                          ${
                            isHero || isStatement
                              ? "text-base"
                              : "text-sm"
                          }
                        `}
                      >
                        {product.tagline}
                      </p>

                    </div>

                    <div
                      className={`
                        mt-5
                        flex
                        items-center
                        justify-between
                        gap-4
                        ${
                          isStatement
                            ? "md:mt-0 md:min-w-[220px] md:flex-col md:items-end"
                            : ""
                        }
                      `}
                    >
                      <span className="text-lg font-semibold text-white">
                        ₹{product.price}
                      </span>

                      <Link
                        href={product.productUrl}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#6e3cbc] transition-all duration-300 hover:bg-[#6e3cbc] hover:text-white"
                      >
                        View Piece
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =========================================
            VIEW ALL
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/#collections"
            className="group inline-flex items-center gap-3 rounded-full border border-[#6e3cbc] px-7 py-3.5 text-sm font-semibold text-[#6e3cbc] transition-all duration-300 hover:bg-[#6e3cbc] hover:text-white"
          >
            Explore All Collections

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}