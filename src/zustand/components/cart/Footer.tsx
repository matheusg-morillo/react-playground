import { useCart } from "./CartContext";

export const Footer = () => {
  const { items } = useCart()

  return (
    <div className="flex flex-row items-center justify-between border-t p-4">
      <span>Total:</span>
      <span>R$ {items.reduce((acm, item) => acm + (item.product.price * item.quantity), 0)}</span>
    </div>
  );
};
