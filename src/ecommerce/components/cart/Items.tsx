import { useCartStore } from "./CartContext"

export const Items = () => {
  const { items, removeItem } = useCartStore((store) => ({
    items: store.items,
    removeItem: store.removeItem,
  }))

  const onRemove = (id: number) => {
    removeItem(id)
  }

  return (
    <div>
      {items.map(({ product: { name, price, id }, quantity }) => (
        <div key={id} className="border-b border-gray-300 py-4 grid grid-cols-5">
          <div
            className="cursor-pointer flex justify-start items-center w-[1em]"
            onClick={() => onRemove(id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
              <path
                fill="#000000"
                d="M10 8.586L2.929 1.515L1.515 2.929L8.586 10l-7.071 7.071l1.414 1.414L10 11.414l7.071 7.071l1.414-1.414L11.414 10l7.071-7.071l-1.414-1.414L10 8.586z"
              ></path>
            </svg>
          </div>
          <span>{name}</span>
          <span>{quantity}</span>
          <span>R$ {price}</span>
          <span>{price * quantity}</span>
        </div>
      ))}
    </div>
  )
}
