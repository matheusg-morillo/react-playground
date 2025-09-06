import React from "react"
import { createContext, useContext } from "react"
import type { Item } from "../../types"
import { useStore } from "./store"
import { getTotal } from "./logic"

type CartContextType = {
  items: Item[]
  open: boolean
  addItem: (item: Item) => void
  toggleCart: () => void
  removeItem: (itemId: number) => void
  getCartProduct: (productId: number) => Item | undefined
  getTotal: () => number
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
  getTotal: () => {
    console.warn("getTotal not implemented")
    return 0
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

  const getTotal_ = () => {
    return getTotal(items)
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
        getTotal: getTotal_,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
