import { Cart, CartProvider, Catalog, Header } from "./components";

export const Ecommerce = () => {
  return (
    <CartProvider>
      <Header />
      <Catalog />
      <Cart />
    </CartProvider>
  );
}
