import { useState, useMemo } from "react"
import type { Product } from "../../types"
import { useCartContent } from "../../components/"

type ItemProps = {
  product: Product
}
export const Item = ({ product }: ItemProps) => {
  const { name, src, price } = product

  const { addItem, items, getCartProduct } = useCartContent()
  const [quantity, setQuantity] = useState(0)

  const total = useMemo(
    () => quantity + (getCartProduct(product.id)?.quantity || 0),
    [items, quantity, product.id],
  )

  const onAddToCart = () => {
    addItem({ product, quantity })
    setQuantity(0)
  }

  const increment = () => {
    if (total >= product.stock) return
    setQuantity((q) => q + 1)
  }

  const decrement = () => {
    if (quantity <= 0) return
    setQuantity((q) => q - 1)
  }

  return (
    <div className="flex flex-col border gap-4 rounded-lg p-4 shadow-lg">
      <div>{name}</div>
      <img src={src} className="w-2xs h-40 rounded-lg object-contain" />
      <span>R$ {price}</span>
      <div className="flex flex-row items-center justify-between">
        <div
          className="cursor-pointer hover:opacity-70 aria-disabled:opacity-70 aria-disabled:cursor-not-allowed"
          onClick={onAddToCart}
          aria-disabled={quantity === 0}
        >
          <a className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add to the cart</a>
        </div>
        <div className="flex flex-row items-center gap-2 border rounded-lg justify-between">
          <div
            className="cursor-pointer rounded-lg px-2 py-1 text-center aria-disabled:opacity-50 aria-disabled:cursor-not-allowed"
            aria-disabled={quantity <= 0}
            onClick={decrement}
          >
            <a>-</a>
          </div>
          <span className="text-center">{quantity}</span>
          <div
            className={`cursor-pointer rounded-lg px-2 py-1 text-center aria-disabled:opacity-50 aria-disabled:cursor-not-allowed`}
            aria-disabled={total >= product.stock}
            onClick={increment}
          >
            <a>+</a>
          </div>
        </div>
      </div>
    </div>
  )
}
