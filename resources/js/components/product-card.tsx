import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/types/product";

/* 🔹 Props */
interface ProductProps {
    products: Product[];
}

function ProductCard({ products }: ProductProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 m-20 gap-6 mt-10 px-10">
            {products.length > 0 ? (
                products.map((product) => (
                    <Card key={product.id} className="hover:shadow-lg pt-3 transition">
                        <CardHeader>
                            <CardTitle className="text-center">
                                {product.name}
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            {product.image_url ? (
                                <img
                                    src={product.image_url}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            ) : (
                                <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
                                    No Image
                                </div>
                            )}
                        </CardContent>

                        <CardFooter className="flex justify-center font-sans items-center text-center">
                            <span className="font-bold text-lg">
                                ₱{product.price}
                            </span>
                        </CardFooter>
                    </Card>
                ))
            ) : (
                <p className="text-center col-span-3">
                    No products found.
                </p>
            )}
        </div>
    );
}

export default ProductCard;