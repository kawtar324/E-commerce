import { NavLink } from "react-router-dom";
import { formattedPrice } from "../helper/formatPrice";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function LinearLayout({ filterProduct }) {
  return (
    <div className="space-y-6">
      {filterProduct.map((product) => (
        <NavLink
          to={`/products/${product.id}`}
          key={product.id}
          className="block"
        >
          <div className="flex gap-8 border-2 border-orange-400 shadow-lg p-4 rounded-lg transition-all duration-200">
            <div className="w-2/5 rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="w-2/4 space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-xl font-black">{product.name}</p>
                <span className="capitalize bg-red-300 text-white text-xs px-1.5 rounded-xl">
                  {product.category}
                </span>
              </div>
              <p className="text-sm mb-">{product.description}</p>
              <div className="flex justify-between items-center pt-3 border-t border-[#ddd]">
                <div className="flex items-center gap-3">
                  <del className="text-gray-400 text-sm">
                    {formattedPrice(product.price + 300000)}
                  </del>
                  <span className="font-black text-green-800 text-lg">
                    {formattedPrice(product.price)}
                  </span>
                </div>
                <span className="text-lg cursor-pointer border border-gray-800 rounded-full p-1 hover:text-white hover:bg-orange-400 hover:border-orange-400 transition-all duration-300">
                  <MdOutlineAddShoppingCart />
                </span>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
