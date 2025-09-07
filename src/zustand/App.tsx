import { Cart, CartContentProvider, CartStateProvider, Catalog, Header } from "./components"

export const Ecommerce = () => {
  return (
    <CartContentProvider>
      <CartStateProvider>
        <Header />
        <Cart />
      </CartStateProvider>
      <Catalog />
    </CartContentProvider>
  )
}
