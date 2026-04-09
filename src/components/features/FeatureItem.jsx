export default function FeatureItem({ title, description }) {
    return (
        <div>
            <h3 className="font-semibold text-xl mb-3 text-pink-500">{title}</h3>
            <p className="text-gray-600">
                {description}
            </p>
        </div>
    );
};