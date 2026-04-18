import HomeLayout from "@/layouts/homeLayout";
import { Head } from '@inertiajs/react';
function Bottoms() {
    return(
        <HomeLayout>
        {/* Bottoms */}
            <Head title="Bottoms" />
        <div className="mt-10 text-center">
            <h1>Bottoms</h1>
            <p>Here are our latest arrivals for you!</p>
        </div>
        </HomeLayout>
    )
}

export default Bottoms;