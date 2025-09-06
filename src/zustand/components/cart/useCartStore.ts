import { create } from 'zustand'
import type { CartStore } from '../../types';

const useCartStore = create<CartStore>((set) => ({
  items: [],
  open: false,
  addItem: (item) => set((state) => {
    const items = state.items;
    const existingItem = items.find(i => i.product.id === item.product.id);

    if (existingItem) {
      const itemsWithoutCurrent = items.filter(i => i.product.id !== item.product.id);
      return {
        items: [
          ...itemsWithoutCurrent,
          {
            ...existingItem,
            quantity: existingItem.quantity + item.quantity
          }
        ]

      }
    }
    return { items: [...state.items, item] }
  }),
  toggleCart: () => set((state) => ({ open: !state.open })),
}));

export { useCartStore };
