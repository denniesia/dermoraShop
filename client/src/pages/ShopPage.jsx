import { useEffect, useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductSection from "../components/products/ProductSection";
import TitleSection from "../components/TitleSection";
import SearchBar from "../components/SearchBar";

export default function ShopPage() {


    return (
        <>
            <Header />
            <TitleSection title={"Shop Skincare"} subtitle={"Explore products by category"}/>
            <SearchBar />
            <ProductSection tag={'products'}/>
            <Footer />
        </>
    );
};