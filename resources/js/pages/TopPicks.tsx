import HomeLayout from "@/layouts/homeLayout";
import { HomeIcon } from "lucide-react";

import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const topPicks = [
    {
        id: 1,
        name: "Urban Hoodie",
        price: "$49.99",
        image: "https://via.placeholder.com/300x300?text=Urban+Hoodie",
        description: "Comfortable and stylish hoodie for city vibes."
    },
    {
        id: 2,
        name: "Streetwear Jeans",
        price: "$79.99",
        image: "https://via.placeholder.com/300x300?text=Streetwear+Jeans",
        description: "High-quality jeans perfect for everyday wear."
    },
    {
        id: 3,
        name: "Graphic Tee",
        price: "$29.99",
        image: "https://via.placeholder.com/300x300?text=Graphic+Tee",
        description: "Bold graphic design on a soft cotton tee."
    },
    {
        id: 4,
        name: "Sneaker Boots",
        price: "$99.99",
        image: "https://via.placeholder.com/300x300?text=Sneaker+Boots",
        description: "Versatile boots that blend style and comfort."
    },
    {
        id: 5,
        name: "Cap Hat",
        price: "$19.99",
        image: "https://via.placeholder.com/300x300?text=Cap+Hat",
        description: "Classic cap to complete your urban look."
    },
    {
        id: 6,
        name: "Jacket",
        price: "$89.99",
        image: "https://via.placeholder.com/300x300?text=Jacket",
        description: "Warm and trendy jacket for all seasons."
    }
];

function TopPicks() {
    return(
        
        <HomeLayout>
            {/* Top Picks */}
            <Head title="Top Picks" />
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">Top Picks</h1>
                    <p className="text-lg text-muted-foreground">Discover our most popular and trending items!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {topPicks.map((product) => (
                        <Card key={product.id} className="overflow-hidden">
                            <CardHeader className="p-0">
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle className="text-lg">{product.name}</CardTitle>
                                <CardDescription className="mt-2">{product.description}</CardDescription>
                                <p className="text-xl font-semibold mt-2">{product.price}</p>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                                <Button className="w-full">Add to Cart</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </HomeLayout>
    )
}

export default TopPicks;