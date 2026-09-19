"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#14091f] text-white"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <h2 className="text-3xl font-bold text-purple-300">
                Coral Bracelet
              </h2>
            </Link>

            <p className="mt-5 max-w-sm text-gray-300 leading-relaxed">
              Handmade bracelets designed to inspire confidence,
              self-love, ambition and personal growth.
            </p>

            <p className="mt-5 text-sm italic text-gray-400">
              Wear Your Dreams.
            </p>
          </motion.div>

          {/* SHOP */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold">
              Shop
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                href="/products/dream-builder"
                className="text-gray-300 hover:text-purple-300 transition"
              >
                Dream Builder
              </Link>

              <Link
                href="/products/self-love"
                className="text-gray-300 hover:text-purple-300 transition"
              >
                Self Love
              </Link>

              <Link
                href="/products/success"
                className="text-gray-300 hover:text-purple-300 transition"
              >
                Success
              </Link>

              <Link
                href="/cart"
                className="text-gray-300 hover:text-purple-300 transition"
              >
                Shopping Cart
              </Link>

              <Link
                href="/wishlist"
                className="text-gray-300 hover:text-purple-300 transition"
              >
                Wishlist
              </Link>

            </div>
          </motion.div>

          {/* COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                href="/#about"
                className="text-gray-300 hover:text-purple-300 transition"
              >
                About Us
              </Link>

              <Link
                href="/#reviews"
                className="text-gray-300 hover:text-purple-300 transition"
              >
                Reviews
              </Link>

              <Link
                href="/#instagram"
                className="text-gray-300 hover:text-purple-300 transition"
              >
                Instagram
              </Link>

              <Link
                href="/#contact"
                className="text-gray-300 hover:text-purple-300 transition"
              >
                Contact
              </Link>

              <Link
                href="/#faq"
                className="text-gray-300 hover:text-purple-300 transition"
              >
                FAQ
              </Link>

            </div>
          </motion.div>

          {/* SOCIAL / CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold">
              Follow Us
            </h3>

            <p className="mt-5 text-gray-300">
              Join our growing community of dreamers.
            </p>

            <a
              href="https://www.instagram.com/coral_bracelet/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-purple-300 hover:text-purple-200 transition font-medium"
            >
              @coral_bracelet
            </a>

            <a
              href="https://wa.me/919760495046"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-gray-300 hover:text-white transition"
            >
              WhatsApp Us
            </a>

            <a
              href="mailto:coralbracelet@gmail.com"
              className="mt-3 block text-gray-300 hover:text-white transition"
            >
              coralbracelet@gmail.com
            </a>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 pt-8 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Coral Bracelet. All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-6">

            <Link
              href="/privacy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/shipping"
              className="hover:text-white transition"
            >
              Shipping Policy
            </Link>

            <Link
              href="/returns"
              className="hover:text-white transition"
            >
              Returns Policy
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}