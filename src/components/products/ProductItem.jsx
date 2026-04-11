export default function ProductItem({ product }) {
    return (
        <article className="border rounded-3xl p-6 shadow-sm hover:shadow-xl transition cursor-pointer flex flex-col">
            <img
                loading="lazy"
                src={product.images[0]}
                className="rounded-xl mb-4 h-48 object-cover"
                alt={product.title}
            />

            <h3 className="font-semibold text-lg mb-1">{product.title}</h3>

            <p className="text-gray-500 mb-3 line-clamp-2">
                {product.description}
            </p>

            <div className="flex items-center gap-1 mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-sm text-gray-600">
                    {product.rating || "4.5"}
                </span>
            </div>

            {/* ✅ Stock status */}
            <p
                className={`text-sm mb-3 font-medium ${product.stock > 0 ? "text-green-600" : "text-red-500"
                    }`}
            >
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>

            {/* 💰 Price + Button */}
            <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-lg">€{product.price}</span>

                <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm px-4 py-2 rounded-xl transition">
                    Buy
                </button>
            </div>
        </article>
    );
};