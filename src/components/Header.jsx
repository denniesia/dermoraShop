export default function Header() {
    return (
        <header className="sticky top-0 bg-white/80 backdrop-blur z-50 flex items-center justify-between px-8 py-4 shadow-sm">
            <h1 className="text-3xl font-bold tracking-tight text-pink-500 ml-10">Dermora Market</h1>
            <nav className="space-x-8 text-m font-medium">
                <a href="#" className="hover:text-pink-500">
                    Home
                </a>
                <a href="#products" className="hover:text-black text-pink-500">
                    Shop
                </a>
                <a href="#about" className="hover:text-pink-500">
                    About
                </a>
                <a href="#contact" className="hover:text-pink-500">
                    Contact
                </a>
            </nav>
        </header>
    );
};