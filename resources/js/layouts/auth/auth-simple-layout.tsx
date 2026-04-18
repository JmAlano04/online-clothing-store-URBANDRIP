import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';

interface AuthLayoutProps {
    children: React.ReactNode;
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: AuthLayoutProps) {
    return (
        <div className="bg-background flex min-h-svh flex-col items-center gap-6 p-6 md:p-10">
            <div className="w-full max-w-md md:max-w-lg">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                       

                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl tracking-widest font-syncopate">{title}</h1>
                            <p className="text-muted-foreground text-center text-sm">{description}</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
