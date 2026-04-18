import HomeLayout from "@/layouts/homeLayout";
import { HomeIcon } from "lucide-react";

import { Head } from '@inertiajs/react';

function TopPicks() {
    return(
        
        <HomeLayout>
            {/* Top Picks */}
            <Head title="Top Picks" />
                <div className="mt-10 text-center">
                    <h1>Top Picks</h1>
                    <p>Here are our top picks for you!</p>
                </div>
        </HomeLayout>
    )
}

export default TopPicks;