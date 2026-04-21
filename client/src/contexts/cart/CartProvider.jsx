import { Children, createContext, useEffect, useState } from "react";
import { toast } from "sonner";
export const CartContext = createContext({
    cart: [],
    addToCart(product) { },
    reduceQuantity(product) {},
    removeFromCart(product) {},
})


export default function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });
    const [products, setProducts] = useState([]);


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find(item => item.id === product.id);

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });

        setProducts((prevProducts) =>
            prevProducts.map((item) =>
                item.id === product.id
                    ? { ...item, stock: item.stock - 1 }
                    : item
            )
        );

        toast.success(`${product.name} was added to the cart.`);
    };

    const reduceQuantity = (product) => {
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
    
    const removeFromCart = (product) => {
        setCart((prev) => {
            
            return prev.filter(item => item.id !== product.id);
        });
    }

    const contextValue = {
        cart,
        addToCart,
        reduceQuantity,
        removeFromCart
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};