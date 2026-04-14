import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../contexts/cart/CartProvider";

export default function Header() {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    
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

                <a
                    href="/cart"
                    className="relative flex items-center gap-2 hover:text-pink-500"
                >
                    <FiShoppingCart className="w-6 h-6" />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full">
                            {totalItems > 99 ? "99+" : totalItems}
                        </span>
                    )}

                </a>
            </nav>
        </header>
    );
};