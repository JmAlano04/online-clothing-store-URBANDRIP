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
                        

                        <CardContent>
                            {product.image ? (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover "
                                />
                            ) : (
                                <div className="w-full h-48 bg-gray-200 flex items-center justify-center ">
                                    No Image
                                </div>
                            )}
                        </CardContent>

                        <CardHeader>
                            <CardTitle className="text-center font-sans text-sm`">
                                {product.name}
                            </CardTitle>
                        </CardHeader>

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