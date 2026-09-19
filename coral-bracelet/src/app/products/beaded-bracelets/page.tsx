import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import {
  collections,
  getProductsByCategory,
} from "@/data/products";

export default function BeadedBraceletsPage() {
  const collection = collections.find(
    (item) => item.slug === "beaded-bracelets"
  );

  if (!collection) {
    return null;
  }

  const products = getProductsByCategory("Beaded Bracelets");

  return (
    <main className="min-h-screen bg-[#fcf9fd]">

      {/* =========================================
          HERO
      ========================================== */}

      <section className="px-6 pb-10 pt-28 md:px-10 md:pb-12 md:pt-32">
        <div className="mx-auto max-w-7xl">

          <Link
            href="/#collections"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6e3cbc] transition-all duration-300 hover:gap-3"
          >
            <ArrowLeft size={17} />
            Back to Collections
          </Link>

          <div className="mx-auto mt-10 max-w-4xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6e3cbc]">
              {collection.eyebrow}
            </p>

            <h1 className="mt-3 text-5xl leading-tight text-[#18131d] md:text-6xl lg:text-7xl">
              {collection.title}
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              {collection.description}
            </p>

          </div>
        </div>
      </section>

      {/* =========================================
          PRODUCT AREA
      ========================================== */}

      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex items-end justify-between border-b border-[#e9e0ee] pb-5">
            <div>
              <p className="text-sm text-gray-500">
                {products.length}{" "}
                {products.length === 1 ? "piece" : "pieces"}
              </p>

              <h2 className="mt-1 text-2xl text-[#18131d] md:text-3xl">
                Beaded Bracelets
              </h2>
            </div>

            <span className="hidden text-sm text-gray-500 sm:block">
              Handmade with love
            </span>
          </div>

          {products.length === 1 ? (
            /* =========================================
               SINGLE PRODUCT — FEATURED LAYOUT
            ========================================== */

            <div className="flex justify-center">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={product.productUrl}
                  className="group w-full max-w-5xl"
                >
                  <div className="grid overflow-hidden rounded-[32px] bg-white shadow-[0_18px_50px_rgba(46,19,69,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(46,19,69,0.14)] md:grid-cols-2">

                    {/* Image */}
                    <div className="relative min-h-[500px] overflow-hidden bg-[#f3edf8] md:min-h-[600px]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        priority
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      {product.badge && (
                        <span className="absolute left-6 top-6 rounded-full bg-white/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6e3cbc] shadow-sm">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">

                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8c6ab1]">
                        {product.category}
                      </p>

                      <h3 className="mt-3 text-4xl leading-tight text-[#18131d] md:text-5xl">
                        {product.name}
                      </h3>

                      <p className="mt-4 text-lg italic text-[#6e3cbc]">
                        {product.tagline}
                      </p>

                      <p className="mt-6 max-w-lg leading-relaxed text-gray-600">
                        {product.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {product.adjustable && (
                          <span className="rounded-full bg-[#f7f1fb] px-4 py-2 text-xs text-gray-600">
                            Adjustable
                          </span>
                        )}

                        {product.material && (
                          <span className="rounded-full bg-[#f7f1fb] px-4 py-2 text-xs text-gray-600">
                            {product.material}
                          </span>
                        )}
                      </div>

                      <div className="mt-10 flex items-center justify-between border-t border-[#eee6f2] pt-6">
                        <span className="text-2xl font-semibold text-[#18131d]">
                          ₹{product.price}
                        </span>

                        <span className="inline-flex items-center gap-2 rounded-full bg-[#6e3cbc] px-6 py-3 font-semibold text-white transition-all duration-300 group-hover:bg-[#5b2fa0]">
                          View Piece
                          <ArrowRight size={17} />
                        </span>
                      </div>

                    </div>
                  </div>
                </Link>
              ))}
            </div>

          ) : (
            /* =========================================
               MULTIPLE PRODUCTS
            ========================================== */

            <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={product.productUrl}
                  className="group"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#f3edf8]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {product.badge && (
                      <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6e3cbc] shadow-sm">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <div className="px-1 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8c6ab1]">
                      {product.category}
                    </p>

                    <h3 className="mt-2 text-3xl text-[#18131d]">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-sm italic text-[#6e3cbc]">
                      {product.tagline}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-semibold text-[#18131d]">
                        ₹{product.price}
                      </span>

                      <span className="flex items-center gap-1 text-sm font-semibold text-[#6e3cbc]">
                        View Piece
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* =========================================
          FOOTER NAVIGATION
      ========================================== */}

      <section className="border-t border-[#eee5f2] bg-white px-6 py-10 md:px-10">
        <div className="flex justify-center">

          <Link
            href="/#collections"
            className="group inline-flex items-center gap-3 rounded-full border border-[#6e3cbc] px-7 py-3.5 text-sm font-semibold text-[#6e3cbc] transition-all duration-300 hover:bg-[#6e3cbc] hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />

            Explore All Collections
          </Link>

        </div>
      </section>

    </main>
  );
}