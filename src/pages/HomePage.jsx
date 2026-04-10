import { useEffect, useState } from "react";
import DiscountSection from "../components/DiscountSection";
import FeatureSection from "../components/features/FeatureSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductSection from "../components/products/ProductSection";

export default function HomePage() {
    const [products, setProducts] = useState([]);
    
        const getProducts = async () => {
            const res = await fetch('https://dummyjson.com/products/category/beauty?limit=3');
            const data = await res.json();
           setProducts(data.products)
        }
    
        console.log(products)
        useEffect (() => {
            getProducts()
        }, [])
    
    return (
        <>
            <Header />
            <Hero />
            <FeatureSection />
            <ProductSection title={"Best Selling Skincare"} products={products}/>
            <DiscountSection />
            <Footer />
        </>

    );
};