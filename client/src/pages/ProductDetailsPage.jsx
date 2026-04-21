import { useParams } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useProducts from "../components/hooks/useProducts";
export default function ProductDetailsPage() {
    const { id } = useParams();
    const { products, loading } = useProducts();

    if (loading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    const product = products.find((p) => p.id == id);

    if (!product) {
        return <p className="text-center mt-10">Product not found</p>;
    }


    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="grid md:grid-cols-2 gap-10">
 
                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

    
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                        <p className="text-gray-500 mb-2">{product.brand}</p>
                        <p className="text-yellow-500 mb-4">
                            ⭐ {product.rating} / 5
                        </p>
                        <p className="text-gray-700 mb-6">{product.description}</p>
                        <p className="text-2xl font-semibold mb-4">
                            ${product.price}
                        </p>

                        <button className="text-white px-8 py-4 rounded-xl bg-pink-500 hover:bg-pink-600">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4 text-pink-500">
                        Customer Reviews
                    </h2>

                    <div className="space-y-4">
                        {product.comments?.map((comment, index) => (
                            <div key={index} className="p-4 border border-pink-200 rounded-xl bg-white">
                                <p className="font-semibold text-pink-500">{comment.username}</p>
                                <p className="text-gray-600">{comment.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}