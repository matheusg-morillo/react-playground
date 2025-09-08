import { useCartStore } from "./CartContext"
import { getTotal } from "./logic"

export const Footer = () => {
  const items = useCartStore((state) => state.items)

  return (
    <div className="flex flex-row items-center justify-between border-t p-4">
      <span>Total:</span>
      <span>R$ {getTotal(items)}</span>
    </div>
  )
}
