import { useContext } from "react";
import { CartContext } from "../contexts/cart/CartProvider";
import Header from "../components/Header";

export default function CartPage() {
    const { cart, removeFromCart } = useContext(CartContext);

    const totalPrice = 0;
    console.log(cart)
    return (
        <>
            <Header/>
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

                {cart.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                    <>
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between border p-4 rounded-xl shadow-sm"
                                >
                                    {/* Product Info */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />

                                        <div>
                                            <h2 className="font-semibold">{item.title}</h2>
                                            <p className="text-gray-500">€{item.price}</p>
                                        </div>
                                    </div>

                                    {/* Quantity */}
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-600">
                                            Qty: {item.quantity}
                                        </span>
                                    </div>

                                    {/* Remove */}
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="text-right mt-6 text-xl font-bold">
                            Total: €{totalPrice.toFixed(2)}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}