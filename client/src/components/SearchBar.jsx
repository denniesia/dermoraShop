import { useState } from "react";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");


    return (
        <>
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-3xl px-4 py-2 text-sm border border-gray-300 rounded-full
                        bg-gray-50
                        focus:outline-none
                        focus:ring-2 focus:ring-pink-500
                        focus:border-transparent
                        transition
                    "
                />
            </div>
            );
        </>
    );
};