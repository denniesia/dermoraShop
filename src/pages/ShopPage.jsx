import { useEffect, useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductSection from "../components/products/ProductSection";
import TitleSection from "../components/TitleSection";

export default function ShopPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        async function getProducts() {
            try {
                const res = await fetch('https://dummyjson.com/products/category/beauty');
                const data = await res.json();
                setProducts(data.products)
                setLoading(false);
            } catch(error) {
                console.error("Error fetching products", error);
                setLoading(false)
            }
            
        }
        getProducts()
    }, [])

    return (
        <>
            <Header />
            <TitleSection title={"Shop Skincare"} subtitle={"Explore products by category"}/>
            <CategoryFilter/>

            <ProductSection products={products}/>
            <Footer />
        </>
    );
};