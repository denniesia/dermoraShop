import { useEffect, useState } from "react";

export default function useProducts({ title='', tag='' }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
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
                setError(null);

                const res = await fetch(url);

                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await res.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [title, tag]);

    return { products, loading, error };
}