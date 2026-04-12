export default function TitleSection({title, subtitle}) {
    return (
        <section class="text-center py-6">
            <h2 class="text-4xl font-bold mb-2">{title}</h2>
            <p class="text-gray-500">{subtitle}</p>
        </section>
    );
};