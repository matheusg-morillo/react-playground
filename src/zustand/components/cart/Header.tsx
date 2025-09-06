import { useCart } from './CartContext';

export const Header = () => {
  const { toggleCart } = useCart()

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Cart</h2>
        <div className="cursor-pointer" onClick={toggleCart}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" >
            <path fill="#000000" d="M10 8.586L2.929 1.515L1.515 2.929L8.586 10l-7.071 7.071l1.414 1.414L10 11.414l7.071 7.071l1.414-1.414L11.414 10l7.071-7.071l-1.414-1.414L10 8.586z"></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mb-2">
        <span>Product</span>
        <span className="ml-16">Qty</span>
        <span className="ml-16">Price</span>
        <span className="ml-16">Subtotal</span>
      </div>
    </div>
  )
}
