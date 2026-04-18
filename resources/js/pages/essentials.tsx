import HomeLayout from "@/layouts/homeLayout";
import { Head } from '@inertiajs/react';

function essentials() {
    return(
        <HomeLayout>
        {/* Essentials */}
        <Head title="Essentials" />
        <div className="mt-10 text-center">
            <h1>Essentials</h1>
            <p>Here are our latest essentials for you!</p>
        </div>
        </HomeLayout>
    )
}

export default essentials;