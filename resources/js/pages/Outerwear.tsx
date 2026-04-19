import HomeLayout from "@/layouts/homeLayout";
import { Head } from '@inertiajs/react';

function Outerwear() {
    return(
        <HomeLayout>
            {/* Outerwear */}
            <Head title="Outerwear" />
            <div className="mt-10 text-center">
                <h1>Outerwear</h1>
                <p>Here are our latest outerwear for you!</p>
            </div>
        </HomeLayout>
    )
}

export default Outerwear;