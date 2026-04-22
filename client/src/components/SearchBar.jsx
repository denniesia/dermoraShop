import { useState } from "react";

export default function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value)
    }

    return (
        <>
            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full max-w-3xl px-4 py-2 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                />
            </div>
        </>
    );
};