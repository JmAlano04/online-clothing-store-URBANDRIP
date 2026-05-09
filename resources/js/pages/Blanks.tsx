import HomeLayout from "@/layouts/homeLayout";
import { Head } from '@inertiajs/react';
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import { Product } from "@/types/product";
import HeaderHomepage from "@/components/header-title-page";


/* 🔹 Props */
interface BlanksProps {
    products: Product[];
}

function Blanks({ products }: BlanksProps) {
    return(
        <HomeLayout>
            <Head title="Blanks" />

            {/* Header */}
            <HeaderHomepage pageTitle="BLANKS" />

            {/* Products */}
            <ProductCard products={products} />
        </HomeLayout>
    )
}

export default Blanks;