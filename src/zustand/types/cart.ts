import type { Product } from "./product";

export type Item = {
  product: Product;
  quantity: number;
};

export type CartStore = {
  items: Item[],
  open: boolean,
  addItem: (item: Item) => void,
  toggleCart: () => void,
};
