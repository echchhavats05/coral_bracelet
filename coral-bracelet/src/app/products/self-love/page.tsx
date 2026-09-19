"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

import ProductGallery from "@/components/products/ProductGallery";
import RelatedProducts from "@/components/products/RelatedProducts";

import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

export default function SelfLovePage() {
  // CART
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  // WISHLIST
  const toggleWishlist = useWishlistStore(
    (state) => state.toggleWishlist
  );

  const wishlist = useWishlistStore(
    (state) => state.wishlist
  );

  // SELECTED DESIGN
  const [selectedImage, setSelectedImage] = useState(
    "/images/selflove/sl1.jpeg"
  );

  const [selectedId, setSelectedId] = useState(201);

  const isWishlisted = wishlist.some(
    (item) => item.id === selectedId
  );

  // DESIGN SELECTION
  const handleImageSelect = (image: string) => {
    setSelectedImage(image);

    if (image.includes("sl1")) {
      setSelectedId(201);
    } else if (image.includes("sl2")) {
      setSelectedId(202);
    } else if (image.includes("sl3")) {
      setSelectedId(203);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* PRODUCT GALLERY */}
        <ProductGallery
          images={[
            "/images/selflove/sl1.jpeg",
            "/images/selflove/sl2.jpeg",
            "/images/selflove/sl3.jpeg",
          ]}
          onImageSelect={handleImageSelect}
        />

        {/* PRODUCT DETAILS */}
        <div>

          <h1 className="text-5xl font-bold">
            Self Love Bracelet
          </h1>

          {/* PRICE + WISHLIST */}
          <div className="flex items-center mt-4">

            <p className="text-3xl text-purple-600">
              ₹299
            </p>

            <button
              type="button"
              onClick={() =>
                toggleWishlist({
                  id: selectedId,
                  name: "Self Love Bracelet",
                  price: 299,
                  image: selectedImage,
                  productUrl: "/products/self-love",
                })
              }
              className={`ml-4 w-12 h-12 rounded-full border flex items-center justify-center transition ${
                isWishlisted
                  ? "bg-pink-100 border-pink-400 text-pink-600"
                  : "border-gray-300 text-gray-600 hover:border-purple-500 hover:text-purple-600"
              }`}
              aria-label="Add to wishlist"
            >
              <Heart
                size={22}
                fill={
                  isWishlisted
                    ? "currentColor"
                    : "none"
                }
              />
            </button>

          </div>

          <p className="mt-8 text-gray-600 text-lg leading-relaxed">
            A beautiful reminder to value yourself,
            embrace confidence, and celebrate who you are.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-4">
            <div>✓ Handmade With Love</div>
            <div>✓ Premium Quality Materials</div>
            <div>✓ Lightweight & Comfortable</div>
            <div>✓ Adjustable Size</div>
          </div>

          {/* ADD TO CART */}
          <button
            type="button"
            onClick={() =>
              addToCart({
                id: selectedId,
                name: "Self Love Bracelet",
                price: 299,
                image: selectedImage,
              })
            }
            className="mt-10 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition font-semibold"
          >
            Add To Cart
          </button>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/YOURNUMBER?text=Hi%20I%20want%20to%20order%20Self%20Love%20Bracelet"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-green-500 text-white px-8 py-4 rounded-full text-center hover:bg-green-600 transition font-semibold"
          >
            Order on WhatsApp
          </a>

        </div>
      </div>

      <RelatedProducts />

    </main>
  );
}