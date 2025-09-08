import { useCart } from "./CartContext"

export const CartToggle = () => {
  const { toggleCart } = useCart()

  return (
    <div className="text-2xl cursor-pointer p-4" onClick={toggleCart} title="Toggle Cart">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={"24px"}
          height={"24px"}
          viewBox="0 0 24 24"
          fill="#FFF"
        >
          <path
            fill="#FFF"
            d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0V1Zm7.764 11h10.515l2.334-7H5.855l1.909 7ZM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0Z"
          />
        </svg>
      </a>
    </div>
  )
}
