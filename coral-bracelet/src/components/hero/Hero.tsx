"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-white">

      {/* Background Glow 1 */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-pink-300/30 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Background Glow 2 */}
      <motion.div
        className="absolute top-40 right-0 w-96 h-96 rounded-full bg-purple-300/30 blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-28">

          {/* LEFT CONTENT */}
          <div>

            {/* Small Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-purple-700 uppercase tracking-[0.3em] text-sm font-medium mb-6"
            >
              Handmade With Love
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="text-6xl md:text-7xl xl:text-8xl font-bold leading-[0.95] text-gray-900"
            >
              Wear Your
              <br />
              <span className="text-purple-700">
                Dreams.
              </span>
            </motion.h1>

            {/* Secondary Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="text-3xl md:text-4xl mt-8 font-medium"
            >
              Build Your Future.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-6 max-w-xl text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              Every bracelet carries a story of courage,
              ambition and self-belief.
              <br />
              Designed for dreamers who are building a
              life they love.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.55,
              }}
              className="flex flex-wrap gap-4 mt-10"
            >

              {/* Primary CTA */}
              <Link href="/#products">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 15px 35px rgba(110,60,188,0.25)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold cursor-pointer"
                >
                  Shop Collection
                </motion.div>
              </Link>

              {/* Secondary CTA */}
              <Link href="/#about">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#F8D3E0",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-purple-300 px-8 py-4 rounded-full font-semibold cursor-pointer"
                >
                  Discover Our Story
                </motion.div>
              </Link>

            </motion.div>

            {/* Mini Brand Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.8,
              }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-purple-400" />

              <p className="text-sm text-gray-500 italic">
                A little reminder to believe in yourself.
              </p>
            </motion.div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            {/* Image Glow */}
            <motion.div
              className="absolute inset-8 rounded-[3rem] bg-purple-300/30 blur-3xl"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.4, 0.65, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating Image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                x: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="relative z-10"
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/dream/dream2.jpeg"
                  alt="Coral Bracelet"
                  width={650}
                  height={650}
                  priority
                  className="w-full max-w-[620px] h-[620px] object-cover rounded-[3rem] shadow-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Decorative Circle */}
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border border-purple-300"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Decorative Dot */}
            <motion.div
              className="absolute top-10 right-0 w-5 h-5 rounded-full bg-yellow-400"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            />

          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
          Scroll to explore
        </p>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mx-auto mt-2 w-px h-8 bg-purple-400"
        />
      </motion.div>

    </section>
  );
}