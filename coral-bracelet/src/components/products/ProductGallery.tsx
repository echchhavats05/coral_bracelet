"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  onImageSelect?: (image: string) => void;
}

export default function ProductGallery({
  images,
  onImageSelect,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
    onImageSelect?.(image);
  };

  return (
    <div>
      {/* Main Image */}
      <div className="bg-gray-100 rounded-3xl overflow-hidden">
        <Image
          src={selectedImage}
          alt="Bracelet"
          width={700}
          height={700}
          className="w-full h-[600px] object-cover"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 mt-4">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => handleImageSelect(image)}
            className={`border-2 rounded-xl overflow-hidden ${
              selectedImage === image
                ? "border-purple-600"
                : "border-gray-200"
            }`}
          >
            <Image
              src={image}
              alt={`Bracelet design ${index + 1}`}
              width={100}
              height={100}
              className="w-24 h-24 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}