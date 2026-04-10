import ProductItem from "./ProductItem";

export default function ProductSection({title="", products}) {

    return (
        <section id="products" className="py-16 max-w-7xl mx-auto px-8 text-pink-500">
            <h2 className="text-4xl font-bold text-center mb-12">
               {title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
};