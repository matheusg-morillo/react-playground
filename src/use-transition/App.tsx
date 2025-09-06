import { useState, useTransition } from "react"
import { updateQuantity } from "./api"
import { useDebounce } from "../common/useDebounce"
import Item from "./Item"
import Total from "./Total"

export default function App() {
  const [quantity, setQuantity] = useState(1)
  const [isPending, startTransition] = useTransition()

  const updateQuantityAction = async (newQuantity: number) => {
    // To access the pending state of a transition,
    // call startTransition again.
    startTransition(async () => {
      const savedQuantity = await updateQuantity(newQuantity)
      startTransition(() => {
        setQuantity(savedQuantity)
      })
    })
  }

  const debouncedUpdateQuantity = useDebounce(updateQuantityAction, 500)

  return (
    <div>
      <h1>Checkout</h1>
      <Item action={debouncedUpdateQuantity} />
      <hr />
      <Total quantity={quantity} isPending={isPending} />
    </div>
  )
}
