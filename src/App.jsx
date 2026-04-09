import Header from "./components/Header";

function App() {
    return (
        <>

            <Header></Header>
            {/* Hero */}
            <section className="grid md:grid-cols-2 items-center px-8 py-16 gap-10 max-w-7xl mx-auto">
                <div>
                    <h2 className="text-5xl font-extrabold leading-tight mb-6">
                        Healthy Skin Starts Here
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Clinically tested, naturally derived skincare designed to hydrate,
                        repair, and enhance your glow.
                    </p>
                    <button className="bg-pink-500 text-white px-8 py-4 rounded-2xl shadow-lg hover:bg-pink-600 transition">
                        Shop Now
                    </button>
                </div>
                <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03"
                    className="rounded-3xl shadow-xl"
                    alt="Natural skincare products"
                />
            </section>
            {/* Features */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center px-6">
                    <div>
                        <h3 className="font-semibold text-xl mb-3">Clean Ingredients</h3>
                        <p className="text-gray-600">
                            Free from parabens, sulfates, and harmful chemicals.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl mb-3">Dermatologist Tested</h3>
                        <p className="text-gray-600">
                            Proven safe for sensitive and all skin types.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl mb-3">Eco-Friendly</h3>
                        <p className="text-gray-600">
                            Sustainable packaging and cruelty-free formulas.
                        </p>
                    </div>
                </div>
            </section>
            {/* Products */}
            <section id="products" className="py-16 max-w-7xl mx-auto px-8">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Best Selling Skincare
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <article className="border rounded-3xl p-6 shadow hover:shadow-lg transition">
                        <img
                            loading="lazy"
                            src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc"
                            className="rounded-xl mb-4"
                            alt="Hydrating serum skincare product"
                        />
                        <h3 className="font-semibold text-lg">Hydrating Serum</h3>
                        <p className="text-gray-500 mb-3">Intense hydration for dry skin</p>
                        <span className="font-bold text-lg">$29</span>
                    </article>
                    <article className="border rounded-3xl p-6 shadow hover:shadow-lg transition">
                        <img
                            loading="lazy"
                            src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273"
                            className="rounded-xl mb-4"
                            alt="Vitamin C cream skincare product"
                        />
                        <h3 className="font-semibold text-lg">Vitamin C Cream</h3>
                        <p className="text-gray-500 mb-3">Brightens and evens skin tone</p>
                        <span className="font-bold text-lg">$35</span>
                    </article>
                    <article className="border rounded-3xl p-6 shadow hover:shadow-lg transition">
                        <img
                            loading="lazy"
                            src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd"
                            className="rounded-xl mb-4"
                            alt="Gentle cleanser skincare product"
                        />
                        <h3 className="font-semibold text-lg">Gentle Cleanser</h3>
                        <p className="text-gray-500 mb-3">Daily face wash for all skin types</p>
                        <span className="font-bold text-lg">$19</span>
                    </article>
                </div>
            </section>
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