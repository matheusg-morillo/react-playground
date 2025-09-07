import React, { createContext, useContext } from "react"
import { useStore } from "./store"

type CartStateContextType = {
  open: boolean
  toggleCart: () => void
}

const cartStateContextInitialValue: CartStateContextType = {
  open: false,
  toggleCart: () => console.warn("toggleCart not implemented"),
}

export const CartStateContext = createContext<CartStateContextType>(cartStateContextInitialValue)

export const useCartState = () => {
  const context = useContext(CartStateContext)

  if (!context) {
    console.warn("useCartState must be used within a CartStateProvider")
  }

  return context
}

export const CartStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const open = useStore((state) => state.open)
  const toggleCart = useStore((state) => state.toggleCart)

  return (
    <CartStateContext.Provider
      value={{
        open,
        toggleCart,
      }}
    >
      {children}
    </CartStateContext.Provider>
  )
}
