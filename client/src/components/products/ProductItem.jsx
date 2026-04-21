import { useContext } from "react";
import { CartContext } from "../../contexts/cart/CartProvider";
import { Link } from "react-router";

export default function ProductItem({ product }) {

    const { addToCart } = useContext(CartContext);

    return (
        <article className="border rounded-3xl p-6 shadow-sm hover:shadow-xl transition flex flex-col ">
            <Link
                to={`/shop/${product.id}`}
                className="block mb-4 rounded-xl overflow-hidden hover:cursor-pointer"
            >
                <img
                    loading="lazy"
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
            </Link>

            <h3 className="font-semibold text-lg mb-1">{product.name}</h3>

            <p className="text-gray-500 mb-3 line-clamp-2">
                {product.description}
            </p>

            <div className="flex items-center gap-1 mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-sm text-gray-600">
                    {product.rating || "4.5"}
                </span>
            </div>

            <p
             className={`text-sm mb-3 font-medium ${product.stock > 0 ? "text-green-600" : "text-red-500"
                    }`}
            >
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-lg">€{product.price}</span>

                <button
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
                    className={`text-white text-sm px-10 py-2 rounded-xl transition
                    ${product.stock === 0
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-pink-500 hover:bg-pink-600 cursor-pointer"}
                    `}
                >
                    {product.stock === 0 ? "Out of stock" : "Buy"}
                </button>
            </div>
        </article>
    );
};