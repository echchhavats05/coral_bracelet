"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Menu,
  X,
} from "lucide-react";

import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const cart = useCartStore((state) => state.cart);

  const wishlist = useWishlistStore(
    (state) => state.wishlist
  );

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = wishlist.length;

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" onClick={closeMenu}>
            <h1 className="text-2xl md:text-3xl font-bold text-purple-700">
              Coral Bracelet
            </h1>
          </Link>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              href="/"
              className="hover:text-purple-600 transition"
            >
              Home
            </Link>

            <Link
              href="/#products"
              className="hover:text-purple-600 transition"
            >
              Shop
            </Link>

            <Link
              href="/#collections"
              className="hover:text-purple-600 transition"
            >
              Collections
            </Link>

            <Link
              href="/#about"
              className="hover:text-purple-600 transition"
            >
              About
            </Link>

            <Link
              href="/#reviews"
              className="hover:text-purple-600 transition"
            >
              Reviews
            </Link>

            <Link
              href="/#contact"
              className="hover:text-purple-600 transition"
            >
              Contact
            </Link>

            {/* WISHLIST */}
            <Link
              href="/wishlist"
              className="relative"
              aria-label="Wishlist"
            >
              <Heart size={25} />

              {wishlistCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* CART */}
            <Link
              href="/cart"
              className="relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={25} />

              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-4">

            <Link
              href="/wishlist"
              className="relative"
              aria-label="Wishlist"
            >
              <Heart size={23} />

              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              href="/cart"
              className="relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={23} />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-5 border-t border-purple-100 pt-5 pb-4">

            <div className="flex flex-col gap-5">

              <Link href="/" onClick={closeMenu}>
                Home
              </Link>

              <Link href="/#products" onClick={closeMenu}>
                Shop
              </Link>

              <Link href="/#collections" onClick={closeMenu}>
                Collections
              </Link>

              <Link href="/#about" onClick={closeMenu}>
                About
              </Link>

              <Link href="/#reviews" onClick={closeMenu}>
                Reviews
              </Link>

              <Link href="/#contact" onClick={closeMenu}>
                Contact
              </Link>

              <Link
                href="/wishlist"
                onClick={closeMenu}
                className="flex items-center gap-2 text-pink-600"
              >
                <Heart size={20} />
                Wishlist
                {wishlistCount > 0 && (
                  <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link
                href="/cart"
                onClick={closeMenu}
                className="flex items-center gap-2 text-purple-700"
              >
                <ShoppingCart size={20} />
                Cart
                {cartCount > 0 && (
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}