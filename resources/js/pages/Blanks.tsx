import HomeLayout from "@/layouts/homeLayout";

import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Blanks() {
    return(
        
        <HomeLayout>
            {/* Top Picks */}
            <Head title="Top Blanks" />
                <div className="mt-10 text-center">
                    <h1>Top Blanks</h1>
                    <p>Here are our top blanks for you!</p>
                </div>
        </HomeLayout>
    )
}

export default Blanks;