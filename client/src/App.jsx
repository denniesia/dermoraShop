import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartProvider from "./contexts/cart/CartProvider";
import CartPage from "./pages/CartPage";
import { Toaster } from "sonner";
import ProductDetailsPage from "./pages/ProductDetailsPage";


function App() {
    return (
        <>
            <Toaster position="bottom-right" toastOptions={{
                style: {
                    background: "white",
                    color: "#FD2666",
                    border: "1px solid #FD2666",
                },
            }} />

            <CartProvider>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/shop/:id" element={<ProductDetailsPage />} />
                </Routes>
            </CartProvider>
        </>
    );
}

export default App;