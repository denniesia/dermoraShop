import CategoryFilter from "../CategoryFilter";
import useProducts from "../hooks/useProducts";
import Loading from "../Loading";
import SearchBar from "../SearchBar";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";

export default function ProductSection({ title = "" }) {
    const [tag, setTag] = useState("All");
    const { products, loading } = useProducts({ title, tag });

    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="products" className="py-6 max-w-7xl mx-auto px-8 text-pink-500 mb-16">
            {
                !title && <SearchBar onSearch={setSearchTerm} />
            }

            {
                !title && <CategoryFilter setTag={setTag} activeTag={tag} />
            }

            <h2 className="text-4xl font-bold text-center mb-12">
                {title}
            </h2>
            {loading && <Loading />}
            <div className="grid md:grid-cols-3 gap-8">
                {
                    filteredProducts.length > 0
                        ? filteredProducts.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))
                        : products.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))
                }
            </div>
        </section>
    );
};