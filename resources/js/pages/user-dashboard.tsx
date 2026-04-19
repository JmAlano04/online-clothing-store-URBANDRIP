import HomeLayout from "@/layouts/homeLayout";
import { HomeIcon } from "lucide-react";

import { Head, router } from '@inertiajs/react';
import { Button } from "@/components/ui/button";

function UserDashboard() {
    return(
        
        <HomeLayout>
            {/* User Dashboard */}
            <Head title="Dashboard" />
                <div className="mt-10 text-center">
                    <h1>User Dashboard</h1>
                    <p>Welcome to your dashboard!</p>
                    <Button onClick={() => router.post(route('logout'))} className="mt-4">
                        Logout
                    </Button>
                </div>
        </HomeLayout>
    )
}

export default UserDashboard;