"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CartButton() {
  const cart = useCartStore((state) => state.cart);

  return (
    <Link
      href="/cart"
      className="
      fixed
      bottom-6
      left-6
      bg-purple-600
      text-white
      rounded-full
      p-4
      shadow-xl
      z-50
      hover:bg-purple-700
      transition
      "
    >
      <div className="relative">
        <ShoppingCart size={24} />

        {cart.length > 0 && (
          <span
            className="
            absolute
            -top-3
            -right-3
            bg-pink-500
            text-white
            text-xs
            w-6
            h-6
            rounded-full
            flex
            items-center
            justify-center
            "
          >
            {cart.length}
          </span>
        )}
      </div>
    </Link>
  );
}