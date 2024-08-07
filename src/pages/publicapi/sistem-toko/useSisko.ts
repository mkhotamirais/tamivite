import { create } from "zustand";
import axios from "axios";
const url = "https://sistemtoko.com/public";

export interface ProductValues {
  id: string;
  name: string;
  photo: string;
  price: string;
  weight: string;
}

export interface CartItems extends ProductValues {
  qty: number;
  createdAt: string;
  weight: string;
  checked: boolean;
}

export interface ProductSingle {
  product_id: string;
  product_name: string;
  product_img: string;
  product_price: string;
  product_status: string;
  product_description: string;
  product_code: string;
  product_buy_price: string;
  product_weight: string;
  variant_kewyord_id: number;
  variant_kewyord_value: string;
}

export type Type = "demo" | "hijja";
export type Sorting = "Lates" | "cheapest" | "expensive";
export type Query = {
  type?: Type;
  search_name?: string;
  sorting?: Sorting;
};
export interface SiskoState {
  products: ProductValues[] | [];
  loadPage: boolean;
  query: Query;
  setQuery: (query: Query) => void;
  getProducts: (query: Query) => void;
  single: ProductSingle | null;
  loadSingle: boolean;
  getSingle: (id: string, query: Query) => void;
  // cart
  cartItems: CartItems[];
  setCartItems: (cartItem: CartItems) => void;
  setCartPlus: (id: string) => void;
  setCartMinus: (id: string) => void;
  clearCartItems: () => void;
}

let cartItems: CartItems[];
const storageCart = localStorage.getItem("siskoCartItems");
if (storageCart) {
  cartItems = JSON.parse(storageCart);
} else cartItems = [];

const saveLocal = (cartItems: CartItems[]) => {
  localStorage.setItem("siskoCartItems", JSON.stringify(cartItems));
};

export const useSisko = create<SiskoState>((set) => ({
  products: [],
  loadPage: false,
  query: { type: "hijja" },
  setQuery: (query) => set((state) => ({ query: { ...state.query, ...query } })),
  getProducts: async (query) => {
    set({ loadPage: true });
    const { type, search_name, sorting } = query;
    const response = await axios.get(
      `${url}/${type}/product?${search_name ? "&search_name=" + search_name : ""}${
        sorting ? "&sorting=" + sorting : ""
      }`
    );
    set({ loadPage: false, products: response.data.aaData });
  },
  single: null,
  loadSingle: false,
  getSingle: async (id, query) => {
    set({ loadSingle: true });
    const { type } = query;
    const response = await axios.get(`${url}/${type}/single/${id}`);
    set({ loadSingle: false, single: response.data });
  },
  // cart
  cartItems,
  setCartItems: (cartItem) => {
    set((state) => {
      let cartItems: CartItems[];
      const match = state.cartItems.find((item) => item?.id === cartItem.id);
      if (!match) {
        cartItems = [...state.cartItems, cartItem];
        saveLocal(cartItems);
        return { cartItems };
      }
      const others = state.cartItems.filter((item) => item.id !== cartItem.id);
      const current = { ...match, qty: match.qty + 1 };
      cartItems = [...others, current];
      saveLocal(cartItems);
      return { cartItems };
    });
  },
  setCartPlus: (id) => {
    set((state) => {
      const others = state.cartItems.filter((item) => item.id !== id);
      const match = state.cartItems.find((item) => item.id === id);
      if (match) {
        const current = { ...match, qty: match.qty + 1 };
        const cartItems = [...others, current];
        saveLocal(cartItems);
        return { cartItems };
      }
      return state;
    });
  },
  setCartMinus: (id) => {
    set((state) => {
      let cartItems: CartItems[];
      const others = state.cartItems.filter((item) => item.id !== id);
      const match = state.cartItems.find((item) => item.id === id);
      if (match) {
        const current = { ...match, qty: match.qty - 1 };
        current.qty === 0 ? (cartItems = [...others]) : (cartItems = [...others, current]);
        saveLocal(cartItems);
        return { cartItems };
      }
      return state;
    });
  },
  clearCartItems: () =>
    set(() => {
      saveLocal([]);
      return { cartItems: [] };
    }),
}));
