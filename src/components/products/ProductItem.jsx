export default function ProductItem({product}) {
    return (
        <article className="border rounded-3xl p-6 shadow-2xs hover:shadow-2xl transition cursor-pointer">
            <img
                loading="lazy"
                src={product.images[0]}
                className="rounded-xl mb-4"
                alt={product.title}
            />
            <h3 className="font-semibold text-lg">{product.title}</h3>
            <p className="text-gray-500 mb-3">{product.description}</p>
            <span className="font-bold text-lg">{product.price}</span>
        </article>
    );
};