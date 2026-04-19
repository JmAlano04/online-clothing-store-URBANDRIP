import HomeLayout from "@/layouts/homeLayout";
import { Head } from '@inertiajs/react';
function NewArrivals() {
    return(
        <HomeLayout>
            {/* New Arrivals */}
            <Head title="New Arrivals" />
            <div className="mt-10 text-center">
                <h1>New Arrivals</h1>
                <p>Here are our latest arrivals for you!</p>
            </div>
        </HomeLayout>
    )
}

export default NewArrivals;