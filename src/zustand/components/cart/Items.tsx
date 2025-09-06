import { useCart } from './CartContext';

export const Items = () => {
  const { items } = useCart();
  return (
    <div>
      {items.map(item => (
        <div key={item.product.id} className="border-b border-gray-300 flex justify-between py-4">
          <span>
            {item.product.name}
          </span>
          <span>{item.quantity}</span>
          <span>R$ {item.product.price}</span>
          <span>{item.product.price * item.quantity}</span>
        </div>
      ))}
    </div>
  );
}
