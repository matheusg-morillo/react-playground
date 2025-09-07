import { useCartContent } from "./CartContentContext"

export const Footer = () => {
  const { getTotal } = useCartContent()

  return (
    <div className="flex flex-row items-center justify-between border-t p-4">
      <span>Total:</span>
      <span>R$ {getTotal()}</span>
    </div>
  )
}
