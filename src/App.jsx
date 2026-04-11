import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import  CartProvider  from "./contexts/cart/CartProvider";


function App() {
    return (

        <CartProvider>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
            </Routes>
        </CartProvider>

    );
}

export default App;