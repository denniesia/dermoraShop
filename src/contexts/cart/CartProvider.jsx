import { Children, createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    cart: [],
    addToCart(product) { },
    removeFromCart(productId) { }
})


export default function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    const addToCart = (product) => {
        console.log("ADDING:", cart);
        setCart((prev) => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prev, { ...product, quantity: 1 }]

        })

    };

    const removeFromCart = (product) => {
        setCart((prev) => {
            const existing = prev.find(item => item.id === product.id);

            if (existing) {
                if (existing.quantity === 1) {
                    return prev.filter(item => item.id !== product.id);
                }

                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }

            return prev;
        });
    }

    const contextValue = {
        cart,
        addToCart,
        removeFromCart
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};