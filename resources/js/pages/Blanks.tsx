import HomeLayout from "@/layouts/homeLayout";
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/* 🔹 Product type */
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    categories: string;
    image_url?: string;
}

/* 🔹 Props */
interface BlanksProps {
    products: Product[];
}

function Blanks({ products }: BlanksProps) {
    return(
        <HomeLayout>
            <Head title="Blanks" />

            {/* Header */}
            <div className="mt-10 text-center bg-white w-full pt-5 pb-5">
                <h1 className="text-5xl font-syncopate font-bold">URBANDRIP - BLANKS</h1>
                <p className="text-gray-500 mt-6 text-xl">Here are our blanks for you!</p>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-3 m-20 gap-6 mt-10 px-10">
                {products.length > 0 ? (
                    products.map((product) => (
                        <Card key={product.id} className="hover:shadow-lg pt-3 transition">
                            
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
                            <div>
                           
                            <CardFooter className="flex justify-center font-sans items-center text-center">
                                <span className="font-bold text-lg">
                                    ₱{product.price}
                                    <CardTitle className="text-sm">{product.name}</CardTitle>
                                </span>
                               
                            </CardFooter>
                            </div>
                        </Card>


                    ))
                ) : (
                    <p className="text-center col-span-3">No products found.</p>
                )}
            </div>
        </HomeLayout>
    )
}

export default Blanks;