import { create } from "zustand"
import type { CartStore } from "../../types"
import { addItem, removeItem } from "./logic"

const useStore = create<CartStore>((set) => ({
  items: [],
  open: false,
  addItem: (item) =>
    set((state) => {
      const items = state.items
      const newItems = addItem(item, items)

      return { items: newItems }
    }),
  removeItem: (productId: number) =>
    set((state) => {
      return {
        items: removeItem(productId, state.items),
      }
    }),
  toggleCart: () => set((state) => ({ open: !state.open })),
}))

export { useStore }
