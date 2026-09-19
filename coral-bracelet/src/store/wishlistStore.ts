import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  productUrl: string;
}

interface WishlistStore {
  wishlist: WishlistItem[];

  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (id: number) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      wishlist: [],

      addToWishlist: (item) =>
        set((state) => {
          const alreadyExists = state.wishlist.some(
            (product) => product.id === item.id
          );

          if (alreadyExists) {
            return state;
          }

          return {
            wishlist: [...state.wishlist, item],
          };
        }),

      removeFromWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter(
            (item) => item.id !== id
          ),
        })),

      toggleWishlist: (item) => {
        const exists = get().wishlist.some(
          (product) => product.id === item.id
        );

        if (exists) {
          get().removeFromWishlist(item.id);
        } else {
          get().addToWishlist(item);
        }
      },

      isInWishlist: (id) =>
        get().wishlist.some(
          (item) => item.id === id
        ),

      clearWishlist: () =>
        set({
          wishlist: [],
        }),
    }),
    {
      name: "coral-bracelet-wishlist",
      storage: createJSONStorage(() => localStorage),
    }
  )
);