export default function CategoryFilter({ setTag, activeTag }) {
    const categories = [
        "All",
        "Cleanser",
        "Serum",
        "Moisturizer",
        "Night Cream",
        "Sunscreen",
    ];
    return (
        <section className="flex justify-center gap-4 mb-5 flex-wrap">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setTag(cat)}
                    className={`px-5 py-2 rounded-xl ${activeTag === cat ? "bg-pink-500 text-white" : "bg-gray-100"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </section>
    );
}
