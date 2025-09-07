import React from "react"
import { createContext, useContext } from "react"
import type { Item } from "../../types"
import { useStore } from "./store"
import { getTotal } from "./logic"

type CartContextType = {
  items: Item[]
  addItem: (item: Item) => void
  removeItem: (itemId: number) => void
  getCartProduct: (productId: number) => Item | undefined
  getTotal: () => number
}

const contextInitialValue: CartContextType = {
  items: [],
  addItem: () => console.warn("addItem not implemented"),
  removeItem: () => console.warn("removeItem not implemented"),
  getCartProduct: () => {
    console.warn("getCartProduct not implemented")
    return undefined
  },
  getTotal: () => {
    console.warn("getTotal not implemented")
    return 0
  },
}

const CartContentContext = createContext<CartContextType>(contextInitialValue)

export const useCartContent = () => {
  const context = useContext(CartContentContext)

  if (!context) {
    console.warn("useCartContext must be used within a CartProvider")
  }

  return context
}

export const CartContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const items = useStore((state) => state.items)
  const addItem = useStore((state) => state.addItem)
  const removeItem = useStore((state) => state.removeItem)

  const getCartProduct = (productId: number) => {
    return items.find((item) => item.product.id === productId)
  }

  const getTotal_ = () => {
    return getTotal(items)
  }

  return (
    <CartContentContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        getCartProduct,
        getTotal: getTotal_,
      }}
    >
      {children}
    </CartContentContext.Provider>
  )
}
