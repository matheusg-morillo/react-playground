import { Items } from "./Items";
import { Header } from './Header';
import { Footer } from "./Footer";
import { useCart } from "./CartContext";

export const Cart = () => {
  const { open } = useCart()

  if (!open) return null;

  return (
    <div className="fixed top-0 right-0 w-1/3 h-full bg-white border-l p-4 shadow-lg">
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-1">
          <Header />
          <Items />
        </div>
        <Footer />
      </div>
    </div>
  );
}
