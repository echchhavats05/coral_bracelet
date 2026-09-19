"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 py-24 px-6"
    >
      {/* Decorative Glow */}
      <motion.div
        className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-600">
            Our Story
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-6xl">
            More Than Jewelry.
          </h2>

          <p className="mt-3 text-2xl text-purple-700 md:text-3xl">
            A Symbol of Who You Are Becoming.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Main image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-[2rem] shadow-2xl"
            >
              <Image
                src="/images/dream/dream2.jpeg"
                alt="Handcrafted Coral Bracelet"
                width={700}
                height={800}
                className="h-[560px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute -bottom-8 -right-4 max-w-xs rounded-3xl border border-white/50 bg-white/90 p-6 shadow-xl backdrop-blur-md md:-right-8"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-purple-600">
                Coral Bracelet
              </p>

              <p className="mt-2 text-xl font-semibold">
                Handmade with Love
              </p>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Every piece is created to carry a little reminder
                of your dreams wherever you go.
              </p>
            </motion.div>

            {/* Decorative Ring */}
            <motion.div
              className="absolute -left-6 -top-6 h-24 w-24 rounded-full border border-purple-300"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-3xl font-bold md:text-4xl">
              Wear a Reminder.
              <br />
              Carry Your Dreams.
            </h3>

            <div className="mt-7 space-y-5 text-lg leading-relaxed text-gray-600">
              <p>
                Coral Bracelet was created for people who dare to
                dream bigger and believe that small reminders can
                create powerful moments.
              </p>

              <p>
                Our handcrafted bracelets are designed around
                confidence, ambition, self-love, resilience and
                personal growth.
              </p>

              <p>
                Whether you are building a career, pursuing an
                education, starting a business or simply becoming
                a stronger version of yourself, your bracelet becomes
                part of that journey.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Believe",
                  text: "Dream bigger.",
                },
                {
                  title: "Build",
                  text: "Keep going.",
                },
                {
                  title: "Become",
                  text: "Grow every day.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + index * 0.15,
                    duration: 0.5,
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-purple-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm"
                >
                  <h4 className="text-lg font-semibold text-purple-700">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-sm text-gray-600">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="/#products"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 12px 30px rgba(110,60,188,0.20)",
              }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 inline-block rounded-full bg-purple-600 px-8 py-4 font-semibold text-white"
            >
              Explore the Collection
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}