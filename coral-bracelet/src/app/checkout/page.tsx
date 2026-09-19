"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (!name || !phone || !address || !city || !pincode) {
      alert("Please fill all the details.");
      return;
    }

    const productDetails = cart
      .map(
        (item) =>
          `• ${item.name} × ${item.quantity} = ₹${
            item.price * item.quantity
          }`
      )
      .join("\n");

    const message = `Hello Coral Bracelet! 💜

I would like to place an order.

Customer Name: ${name}
Phone: ${phone}

Address:
${address}
${city} - ${pincode}

Products:
${productDetails}

Total: ₹${total}

Please confirm my order. Thank you! ✨`;

    const whatsappNumber = "919760495046";

    const whatsappUrl = `https://wa.me/${919760495046}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  if (cart.length === 0) {
    return (
      <main className="min-h-screen px-6 py-32 text-center">
        <h1 className="text-4xl font-bold">
          Your Cart Is Empty
        </h1>

        <p className="mt-4 text-gray-500">
          Add a bracelet before checkout.
        </p>

        <Link
          href="/#products"
          className="inline-block mt-8 bg-purple-600 text-white px-8 py-4 rounded-full"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white px-6 py-24">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-14">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* CUSTOMER DETAILS */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6">
              Delivery Details
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
              />

              <textarea
                placeholder="Delivery Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={4}
                className="w-full border rounded-xl px-4 py-3 resize-none"
              />

              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="text"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
              />

            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6">
              Your Order
            </h2>

            <div className="space-y-5">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>

                    <p className="text-purple-600 font-medium">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            <div className="border-t mt-8 pt-6 flex justify-between text-xl font-bold">
              <span>Total</span>

              <span className="text-purple-600">
                ₹{total}
              </span>
            </div>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full mt-8 bg-green-500 text-white py-4 rounded-full font-semibold hover:bg-green-600 transition"
            >
              Place Order on WhatsApp
            </button>

            <Link
              href="/cart"
              className="block text-center mt-4 text-purple-600"
            >
              ← Back to Cart
            </Link>

          </div>

        </div>
      </div>
    </main>
  );
}