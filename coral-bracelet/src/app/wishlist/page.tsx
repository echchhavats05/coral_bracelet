"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Heart } from "lucide-react";

import { useWishlistStore } from "@/store/wishlistStore";

export default function WishlistPage() {
  const wishlist = useWishlistStore(
    (state) => state.wishlist
  );

  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

  if (wishlist.length === 0) {
    return (
      <main className="min-h-screen px-6 py-32 text-center">
        <Heart
          size={56}
          className="mx-auto text-purple-500"
        />

        <h1 className="text-4xl font-bold mt-6">
          Your Wishlist Is Empty
        </h1>

        <p className="mt-4 text-gray-500">
          Save your favorite bracelet designs here.
        </p>

        <Link
          href="/#products"
          className="inline-block mt-8 bg-purple-600 text-white px-8 py-4 rounded-full"
        >
          Explore Bracelets
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      <h1 className="text-5xl font-bold mb-12">
        My Wishlist
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >

            <Link href={item.productUrl}>
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className="w-full h-72 object-cover"
              />
            </Link>

            <div className="p-6">

              <h2 className="text-2xl font-semibold">
                {item.name}
              </h2>

              <p className="mt-2 text-purple-600 text-xl">
                ₹{item.price}
              </p>

              <button
                type="button"
                onClick={() =>
                  removeFromWishlist(item.id)
                }
                className="mt-5 flex items-center gap-2 text-red-500"
              >
                <Trash2 size={18} />
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>
    </main>
  );
}