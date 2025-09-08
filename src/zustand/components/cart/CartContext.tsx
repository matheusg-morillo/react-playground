import { createContext, useContext, useRef } from "react"
import { createStore, useStore } from "zustand"
import type { StoreApi } from "zustand"
import type { Product } from "../../types"
import { addItem, removeItem } from "./logic"
import { useShallow } from "zustand/shallow"

export type Item = {
  product: Product
  quantity: number
}

export type CartState = {
  items: Item[]
  open: boolean
}

export type CartActions = {
  toggleCart: () => void
  addItem: (item: Item) => void
  removeItem: (productId: number) => void
}

export const CartContext = createContext<StoreApi<CartActions & CartState> | null>(null)

export function useCartStore<T>(selector: (state: CartActions & CartState) => T) {
  const store = useContext(CartContext)
  const selectorWithShallow = useShallow(selector)

  if (!store) {
    throw new Error("useCartStore must be used within a CartProvider")
  }

  return useStore(store, selectorWithShallow)
}

export const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const storeRef = useRef<StoreApi<CartState & CartActions>>(null)

  if (storeRef.current === null) {
    storeRef.current = createStore<CartState & CartActions>((set, get) => ({
      items: [],
      open: false,
      toggleCart: () => {
        const { open } = get()

        set({ open: !open })
      },
      addItem: (item) => {
        const { items } = get()
        const newItems = addItem(item, items)

        set({ items: newItems })
      },
      removeItem: (productId: number) => {
        const { items } = get()

        set({ items: removeItem(productId, items) })
      },
    }))
  }

  return <CartContext.Provider value={storeRef.current}>{children}</CartContext.Provider>
}
