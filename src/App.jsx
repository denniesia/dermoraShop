import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import  CartProvider  from "./contexts/cart/CartProvider";
import CartPage from "./pages/CartPage";


function App() {
    return (

        <CartProvider>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </CartProvider>

    );
}

export default App;