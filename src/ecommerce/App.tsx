import { Cart, CartContextProvider, Catalog, Header } from "./components"

export const Ecommerce = () => {
  return (
    <CartContextProvider>
      <Header />
      <Cart />
      <Catalog />
    </CartContextProvider>
  )
}
