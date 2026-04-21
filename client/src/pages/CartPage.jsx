import { useContext, useState } from "react";
import { CartContext } from "../contexts/cart/CartProvider";
import { MdDelete } from "react-icons/md";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CartPage() {
    const { cart, reduceQuantity, addToCart, removeFromCart } = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const increaseQuantity = (item) => {
        addToCart(item)

    };
    const decreaseQuantity = (item) => {
        reduceQuantity(item)
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
                                    <div className="space-y-6">
                                        {cart.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center justify-between border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition"
                                            >
                                                {/* LEFT: Product Info */}
                                                <div className="flex items-center gap-4 flex-1 min-w-0">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                                                    />

                                                    <div className="min-w-0">
                                                        <h2 className="font-semibold text-lg truncate">
                                                            {item.name}
                                                        </h2>
                                                        <p className="text-gray-500 text-sm truncate">
                                                            {item.brand}
                                                        </p>
                                                        <p className="text-gray-500">
                                                            €{item.price}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* RIGHT: Controls */}
                                                <div className="flex items-center gap-6 w-[220px] justify-end flex-shrink-0">

                                                    {/* Quantity */}
                                                    <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl">
                                                        <button
                                                            onClick={() => decreaseQuantity(item)}
                                                            className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow hover:bg-gray-200 transition"
                                                        >
                                                            −
                                                        </button>

                                                        <span className="w-6 text-center font-medium">
                                                            {item.quantity}
                                                        </span>

                                                        <button
                                                            onClick={() => increaseQuantity(item)}
                                                            className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow hover:bg-gray-200 transition"
                                                        >
                                                            +
                                                        </button>
                                                    </div>

                                                    <div className="flex items-center gap-6 w-[220px] justify-end flex-shrink-0">
                                                        <p className="text-lg">
                                                            €{(item.price * item.quantity).toFixed(2)}
                                                        </p>
                                                        {/* Remove */}
                                                        <button
                                                            onClick={() => removeFromCart(item)}
                                                            className="hover:cursor-pointer"
                                                        >
                                                            <MdDelete size={30} color="black" />
                                                        </button>
                                                    </div>



                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Total Section */}
                                    <div className="mt-8 p-6 border border-gray-100 rounded-2xl shadow-sm flex justify-between items-center">
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