import HomeLayout from "@/layouts/homeLayout";
import { Head } from '@inertiajs/react';
function Blanks() {
    return(
        <HomeLayout>
        {/* Blanks */}
        <Head title="Blanks" />
        <div className="mt-10 text-center">
            <h1>Blanks</h1>
            <p>Here are our top picks for you!</p>
        </div>
        </HomeLayout>
    )
}

export default Blanks;