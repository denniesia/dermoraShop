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
            img: "https://images.unsplash.com/photo-1723951174326-2a97221d3b7f?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Vitamin C Cream",
            description: "Brightens and evens skin tone",
            price: "$35"

        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1748639320154-6ba118bccc74?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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