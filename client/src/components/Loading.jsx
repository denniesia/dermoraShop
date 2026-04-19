export default function Loading() {
    return (
        <div className="flex justify-center h-screen">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-pink-500 rounded-full animate-spin"></div>
                <p className="text-gray-600 text-sm">Loading products...</p>
            </div>
        </div>
    );
};