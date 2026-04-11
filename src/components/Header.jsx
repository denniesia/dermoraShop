import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
    return (
        <header className="sticky top-0 bg-white/80 backdrop-blur z-50 flex items-center justify-between px-8 py-4 shadow-sm">
            <a href="/"><h1 className="text-3xl font-bold tracking-tight text-pink-500 ml-10">Dermora Shop</h1></a>
            <nav className="flex items-center gap-8 text-md font-medium">
                <a href="/" className="hover:text-pink-500">
                    Home
                </a>

                <a href="/shop" className="text-pink-500 hover:text-black">
                    Shop
                </a>

                <a href="#" className="flex items-center gap-2 hover:text-pink-500">
                    <FiShoppingCart className="w-6 h-6 " />
                </a>
            </nav>
        </header>
    );
};