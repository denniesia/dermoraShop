
import DiscountSection from "../components/DiscountSection";
import FeatureSection from "../components/features/FeatureSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductSection from "../components/products/ProductSection";

export default function HomePage() {
   
    
    return (
        <>
            <Header />
            <Hero />
            <FeatureSection />
            <ProductSection title={"Best Selling Skincare"} />
            <DiscountSection />
            <Footer />
        </>

    );
};