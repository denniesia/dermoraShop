import CategoryFilter from "../CategoryFilter";
import Loading from "../Loading";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";

export default function ProductSection({ title = "" }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tag, setTag] = useState("All");

    useEffect(() => {
        async function getProducts() {
            const baseUrl =
                title === "Best Selling Skincare"
                    ? "http://localhost:3001/bestSelling"
                    : "http://localhost:3001/products";

            const params = new URLSearchParams();

            if (tag && tag !== "All") {
                params.append("category", tag.toLowerCase());
            }

            const url = params.toString()
                ? `${baseUrl}?${params.toString()}`
                : baseUrl;

            try {
                setLoading(true);

                const res = await fetch(url);
                const data = await res.json();

                setProducts(data);
            } catch (error) {
                console.error("Error fetching products", error);
            } finally {
                setLoading(false);
            }
        }

        getProducts();
    }, [tag, title]);

    return (
        <section id="products" className="py-6 max-w-7xl mx-auto px-8 text-pink-500 mb-16">
            {
                !title && <CategoryFilter setTag={setTag} activeTag={tag} />
            }
            
            <h2 className="text-4xl font-bold text-center mb-12">
                {title}
            </h2>
            {loading && <Loading />}
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