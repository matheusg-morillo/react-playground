import React from 'react';
import { createContext, useContext } from 'react';
import type { Item } from '../../types';
import { useCartStore } from './useCartStore';

type CartContextType = {
  items: Item[],
  open: boolean,
  addItem: (item: Item) => void,
  toggleCart: () => void,
}

const contextInitialValue: CartContextType = {
  items: [],
  open: false,
  addItem: () => console.warn('addItem not implemented'),
  toggleCart: () => console.warn('toggleCart not implemented'),
}

const CartContext = createContext<CartContextType>(contextInitialValue);

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    console.warn('useCartContext must be used within a CartProvider');
  }

  return context;
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const toggleCart = useCartStore(state => state.toggleCart);
  const items = useCartStore(state => state.items);
  const open = useCartStore(state => state.open);
  const addItem = useCartStore(state => state.addItem);

  return (
    <CartContext.Provider value={{
      toggleCart,
      items,
      open,
      addItem
    }}>
      {children}
    </CartContext.Provider>
  );
}

