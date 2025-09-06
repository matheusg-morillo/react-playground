import React from "react"
import { createContext, useContext } from "react"
import type { Item } from "../../types"
import { useStore } from "./store"

type CartContextType = {
  items: Item[]
  open: boolean
  addItem: (item: Item) => void
  toggleCart: () => void
  removeItem: (itemId: number) => void
  getCartProduct: (productId: number) => Item | undefined
}

const contextInitialValue: CartContextType = {
  items: [],
  open: false,
  addItem: () => console.warn("addItem not implemented"),
  toggleCart: () => console.warn("toggleCart not implemented"),
  removeItem: () => console.warn("removeItem not implemented"),
  getCartProduct: () => {
    console.warn("getCartProduct not implemented")
    return undefined
  },
}

const CartContext = createContext<CartContextType>(contextInitialValue)

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    console.warn("useCartContext must be used within a CartProvider")
  }

  return context
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const toggleCart = useStore((state) => state.toggleCart)
  const items = useStore((state) => state.items)
  const open = useStore((state) => state.open)
  const addItem = useStore((state) => state.addItem)
  const removeItem = useStore((state) => state.removeItem)

  const getCartProduct = (productId: number) => {
    return items.find((item) => item.product.id === productId)
  }

  return (
    <CartContext.Provider
      value={{
        toggleCart,
        items,
        open,
        addItem,
        removeItem,
        getCartProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
