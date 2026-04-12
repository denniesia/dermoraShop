import Loading from "../Loading";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";

export default function ProductSection({ title = "" }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function getProducts() {
            try {
                const res = await fetch('http://localhost:3001/products');
                const data = await res.json();
                setProducts(data)
                setLoading(false);
                console.log(data)
            } catch (error) {
                console.error("Error fetching products", error);
                setLoading(false)
            }
        }
        getProducts()
    }, [])


    return (
        <section id="products" className="py-16 max-w-7xl mx-auto px-8 text-pink-500">
            <h2 className="text-4xl font-bold text-center mb-12">
                {title}
            </h2>
            {loading && <Loading/>}
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