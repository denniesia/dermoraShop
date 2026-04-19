import { useState } from "react";

export default function DiscountSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("")

    function handleSubscribe(e) {
        e.preventDefault();
        setIsOpen(true)
        setEmail("")
    }

    return (
        <>
            <section className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-center py-16 px-6">
                <h2 className="text-4xl font-bold mb-4">Get 10% Off Your First Order</h2>
                <p className="mb-8">Subscribe for exclusive deals and skincare insights.</p>
                <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col md:flex-row justify-center gap-3"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-4 rounded-xl text-gray-800 w-72 bg-white"
                        required
                    />

                    <button className="bg-white text-pink-500 px-6 py-4 rounded-xl font-semibold">
                        Subscribe
                    </button>
                </form>
            </section>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white text-gray-800 p-8 rounded-2xl max-w-sm text-center shadow-xl">
                        <h3 className="text-2xl font-bold mb-2">🎉 Subscription Successful!</h3>

                        <p className="mb-4">
                            Thank you for subscribing. Here is your discount code:
                        </p>

                        <div className="bg-pink-100 text-pink-600 font-bold text-xl py-3 rounded-lg mb-4">
                            DERMORA10
                        </div>

                        <p className="text-sm mb-6">
                            Use this code at checkout to get 10% off your first order.
                        </p>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-pink-500 text-white px-6 py-2 rounded-xl"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};