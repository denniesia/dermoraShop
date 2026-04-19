import { useContext } from "react";
import { CartContext } from "../contexts/cart/CartProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CartPage() {
    const { cart, removeFromCart } = useContext(CartContext);

    const totalPrice = 0;
    const increaseQuantity = (id) => {
        // increment logic
    };

    const decreaseQuantity = (id) => {
        // decrement logic (prevent going below 1)
    };

    return (
        <>
            <Header />
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

                {cart.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                    <>
                        <div className="max-w-4xl mx-auto p-6">


                            {cart.length === 0 ? (
                                <p className="text-gray-500 text-center py-10">
                                    Your cart is empty 🛒
                                </p>
                            ) : (
                                <>
                                    <div className="space-y-4">
                                        {cart.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center justify-between border p-4 rounded-2xl shadow-sm hover:shadow-md transition"
                                            >
                                                {/* Product Info */}
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-20 h-20 object-cover rounded-xl"
                                                    />

                                                    <div>
                                                        <h2 className="font-semibold text-lg">
                                                            {item.title}
                                                        </h2>
                                                        <p className="text-gray-500">
                                                            €{item.price}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl">
                                                    <button
                                                        onClick={() => decreaseQuantity(item.id)}
                                                        className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow hover:bg-gray-200 transition"
                                                    >
                                                        −
                                                    </button>

                                                    <span className="w-6 text-center font-medium">
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        onClick={() => increaseQuantity(item.id)}
                                                        className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow hover:bg-gray-200 transition"
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                {/* Remove */}
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-500 font-medium hover:text-red-700 transition"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Total Section */}
                                    <div className="mt-8 p-6 border rounded-2xl shadow-sm flex justify-between items-center">
                                        <span className="text-lg font-medium text-gray-600">
                                            Total
                                        </span>
                                        <span className="text-2xl font-bold">
                                            €{totalPrice.toFixed(2)}
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
            <Footer /> 
        </>
    );
}