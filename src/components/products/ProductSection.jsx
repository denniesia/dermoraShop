import ProductItem from "./ProductItem";

export default function ProductSection() {
    const products = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc",
            title: "Hydrating Serum",
            description: "Intense hydration for dry skin",
            price: "$29"

        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273",
            title: "Vitamin C Cream",
            description: "Brightens and evens skin tone",
            price: "$35"

        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc",
            title: "Gentle Cleanser",
            description: "Daily face wash for all skin types",
            price: "$19"

        },
    ]

    return (
        <section id="products" className="py-16 max-w-7xl mx-auto px-8 text-pink-500">
            <h2 className="text-4xl font-bold text-center mb-12">
                Best Selling Skincare
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        img={product.img}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
        </section>
    );
};