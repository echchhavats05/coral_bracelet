"use client";

import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-10">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-xl text-gray-500">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-6"
              >
                {/* Product Details */}
                <div className="flex items-center gap-5">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="font-bold text-2xl">
                      {item.name}
                    </h3>

                    <p className="text-purple-600 text-lg">
                      ₹{item.price}
                    </p>

                    {/* Quantity Buttons */}
                    <div className="flex items-center gap-3 mt-3">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                      >
                        -
                      </button>

                      <span className="font-semibold text-lg">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                      >
                        +
                      </button>

                    </div>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}

          </div>

          {/* Total */}
          <div className="mt-12 text-right">
            <h2 className="text-4xl font-bold">
              Total: ₹{total}
            </h2>

            <a
              href="/checkout"
              className="inline-block mt-6 bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700"
            >
              Proceed To Checkout
            </a>
          </div>
        </>
      )}
    </main>
  );
}