"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

import ProductGallery from "@/components/products/ProductGallery";
import RelatedProducts from "@/components/products/RelatedProducts";

import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

export default function DreamBuilderPage() {
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
    "/images/dream/dream1.jpeg"
  );

  const [selectedId, setSelectedId] = useState(101);

  // Check whether selected design is in wishlist
  const isWishlisted = wishlist.some(
    (item) => item.id === selectedId
  );

  // Handle design selection
  const handleImageSelect = (image: string) => {
    setSelectedImage(image);

    if (image.includes("dream1")) {
      setSelectedId(101);
    } else if (image.includes("dream2")) {
      setSelectedId(102);
    } else if (image.includes("dream3")) {
      setSelectedId(103);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* PRODUCT GALLERY */}
        <ProductGallery
          images={[
            "/images/dream/dream1.jpeg",
            "/images/dream/dream2.jpeg",
            "/images/dream/dream3.jpeg",
          ]}
          onImageSelect={handleImageSelect}
        />

        {/* PRODUCT DETAILS */}
        <div>

          <h1 className="text-5xl font-bold">
            Dream Builder Bracelet
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
                  name: "Dream Builder Bracelet",
                  price: 299,
                  image: selectedImage,
                  productUrl: "/products/dream-builder",
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
            A handcrafted bracelet designed to remind you
            that every dream starts with belief and grows
            through consistent action.
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
                name: "Dream Builder Bracelet",
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
            href={`https://wa.me/919760495046?text=Hi%20I%20want%20to%20order%20Dream%20Builder%20Bracelet`}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-green-500 text-white px-8 py-4 rounded-full text-center hover:bg-green-600 transition font-semibold"
          >
            Order on WhatsApp
          </a>

        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <RelatedProducts />

    </main>
  );
}