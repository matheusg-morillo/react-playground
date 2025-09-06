import { producList } from "../../db/products";
import { Item } from "./Item";

export const Catalog = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4 p-4">
        {producList.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
