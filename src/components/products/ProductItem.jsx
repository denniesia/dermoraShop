export default function ProductItem({img, title, description, price}) {
    return (
        <article className="border rounded-3xl p-6 shadow hover:shadow-lg transition cursor-pointer">
            <img
                loading="lazy"
                src={img}
                className="rounded-xl mb-4"
                alt={title}
            />
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-500 mb-3">{description}</p>
            <span className="font-bold text-lg">{price}</span>
        </article>
    );
};