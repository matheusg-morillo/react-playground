import { CartToggle } from "../cart/Toggle"

export const Header = () => {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-4xl font-bold text-center my-8">E-commerce Store</h1>
      <CartToggle />
    </div>
  )
}
