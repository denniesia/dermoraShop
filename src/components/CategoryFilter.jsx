export default function CategoryFilter() {
    return (
        <section class="flex justify-center gap-4 mb-10 flex-wrap">
            <button onclick="filterProducts('all')" class="px-5 py-2 bg-pink-500 text-white rounded-xl">All</button>
            <button onclick="filterProducts('cleanser')" class="px-5 py-2 bg-gray-100 rounded-xl">Cleansers</button>
            <button onclick="filterProducts('serum')" class="px-5 py-2 bg-gray-100 rounded-xl">Serums</button>
            <button onclick="filterProducts('moisturizer')" class="px-5 py-2 bg-gray-100 rounded-xl">Moisturizers</button>
        </section>
    );
};