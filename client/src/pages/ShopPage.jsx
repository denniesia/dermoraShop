import { useEffect, useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductSection from "../components/products/ProductSection";
import TitleSection from "../components/TitleSection";

export default function ShopPage() {


    return (
       <div  className="min-h-screen flex flex-col">
            <Header />
            <TitleSection title={"Shop Skincare"} subtitle={"Explore products by category"}/>
            <ProductSection tag={'products'}/>
            <Footer />
        </div>
    );
};