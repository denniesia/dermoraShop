import FeatureSection from "./components/features/FeatureSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/products/ProductSection";

function App() {
    return (
        <>
            <Header/>
      
            <Hero/>
            {/* Features */}
            <FeatureSection/>
            {/* Products */}
            <ProductSection/>
            {/* CTA */}
            <section className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-center py-16 px-6">
                <h2 className="text-4xl font-bold mb-4">Get 10% Off Your First Order</h2>
                <p className="mb-8">Subscribe for exclusive deals and skincare insights.</p>
                <form className="flex flex-col md:flex-row justify-center gap-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-4 rounded-xl text-gray-800 w-72"
                        required=""
                    />
                    <button className="bg-white text-pink-500 px-6 py-4 rounded-xl font-semibold">
                        Subscribe
                    </button>
                </form>
            </section>
            {/* Footer */}
            <footer className="py-8 text-center text-gray-500 text-sm">
                <p>© 2026 GlowSkin. All rights reserved.</p>
            </footer>
        </>

    );
}

export default App;