import HomeLayout from "@/layouts/homeLayout";
import HeaderHomepage from "@/components/header-title-page";
import ProductCard from "@/components/product-card";
import { Head } from '@inertiajs/react';


function Outerwear({ products }: { products: any[] }) {
    return(
        <HomeLayout>
            <Head title="Outerwear" />

            {/* Header */}
            <HeaderHomepage pageTitle="OUTERWEAR" />

            {/* Products */}
            <ProductCard products={products} />
        </HomeLayout>
    )
}

export default Outerwear;