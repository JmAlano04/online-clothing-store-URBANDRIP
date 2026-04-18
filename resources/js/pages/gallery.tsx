import HomeLayout from "@/layouts/homeLayout";
import essentials from "./essentials";
import { Head } from '@inertiajs/react';

function gallery() {
    return(
        <HomeLayout>
          {/* Gallery */}
        <Head title="Gallery" />
        <div className="mt-10 text-center">
            <h1>Gallery</h1>
            <p>Here are our latest gallery items for you!</p>
        </div>
        </HomeLayout>
    )
}

export default gallery;