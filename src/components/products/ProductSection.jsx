import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";

export default function ProductSection({ title = "" }) {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const res = await fetch('https://dummyjson.com/products/category/beauty?limit=3');
        const data = await res.json();
        setProducts(data.products)
    }

    console.log(products)
    useEffect(() => {
        getProducts()
    }, [])
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