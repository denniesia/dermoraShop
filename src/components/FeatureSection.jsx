import FeatureItem from "./FeatureItem";

export default function FeatureSection() {

    const features = [
        {
            id: 1,
            title: "Clean Ingredients",
            description: "Free from parabens, sulfates, and harmful chemicals."
        },
        {
            id: 2,
            title: "Dermatologist Tested",
            description: "Proven safe for sensitive and all skin types."
        },
        {
            id: 3,
            title: "Eco-Friendly",
            description: " Sustainable packaging and cruelty-free formulas."
        }
    ]
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center px-6">
                {features.map((feature) => (
                    <FeatureItem
                        key={feature.id}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
};