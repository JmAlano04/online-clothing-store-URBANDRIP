import HomeLayout from "@/layouts/homeLayout";

import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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