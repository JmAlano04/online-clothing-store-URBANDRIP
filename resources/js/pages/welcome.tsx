import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/homeLayout';
import { Home } from 'lucide-react';
import HomeLayout from '@/layouts/homeLayout';
export default function Welcome() {
    return (
        <HomeLayout>
            <Head title="Welcome" />

            {/* TOP PICKS PREVIEW */}
            <div className="mt-10 text-center">
                <h2 className="text-2xl">Top Picks</h2>
            </div>

        </HomeLayout>
    );
}