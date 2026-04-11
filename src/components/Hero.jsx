export default function Hero() {
    return (
        <section className="grid md:grid-cols-2 items-center px-8 py-16 gap-10 max-w-7xl mx-auto">
            <div>
                <h2 className="text-5xl font-extrabold leading-tight mb-6">
                   Shop Everything You Need in One Place
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Explore a wide range of quality products, from everyday essentials to the latest trends—all carefully selected to give you the best shopping experience.
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
    );
};