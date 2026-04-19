import HomeLayout from "@/layouts/homeLayout";
import { Head } from '@inertiajs/react';
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import { Product } from "@/types/product";


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
                <h1 className="text-5xl text-gray-800 font-syncopate font-bold">URBANDRIP - BLANKS</h1>
                <p className="text-gray-500 mt-6 text-xl">Here are our blanks for you!</p>
            </div>

            {/* Products */}
            <ProductCard products={products} />
        </HomeLayout>
    )
}

export default Blanks;