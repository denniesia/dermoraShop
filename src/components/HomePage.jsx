import DiscountSection from "./DiscountSection";
import FeatureSection from "./features/FeatureSection";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ProductSection from "./products/ProductSection";

export default function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <FeatureSection />
            <ProductSection />
            <DiscountSection />
            <Footer />
        </>

    );
};