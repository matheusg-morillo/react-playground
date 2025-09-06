import type { Item } from "../../types"

export const addItem = (item: Item, items: Item[]) => {
  const existingItem = items.find((i) => i.product.id === item.product.id)

  if (existingItem) {
    const itemsWithoutCurrent = items.filter((i) => i.product.id !== item.product.id)
    return [
      ...itemsWithoutCurrent,
      { ...existingItem, quantity: existingItem.quantity + item.quantity },
    ]
  }
  return [...items, item]
}

export const removeItem = (productId: number, items: Item[]) => {
  const newItems = items.filter((i) => i.product.id !== productId)

  return newItems
}

export const getTotal = (items: Item[]) => {
  return items.reduce((acm, item) => acm + item.product.price * item.quantity, 0)
}
