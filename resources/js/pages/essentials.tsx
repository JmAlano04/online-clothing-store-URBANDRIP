import HomeLayout from "@/layouts/homeLayout";
import HeaderHomepage from "@/components/header-title-page";
import ProductCard from "@/components/product-card";
import { Head } from '@inertiajs/react';


function Essentials({ products }: { products: any[] }) {
    return(
        <HomeLayout>
            <Head title="Essentials" />

            {/* Header */}
            <HeaderHomepage pageTitle="ESSENTIALS" />

            {/* Products */}
            <ProductCard products={products} />
        </HomeLayout>
    )
}

export default Essentials;