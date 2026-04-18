import { Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { ShoppingCart } from 'lucide-react';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    const { auth } = usePage<SharedData>().props;

    return (
        <div className="min-h-screen pr-10 pl-10 pt-4 bg-[#F0F0F0]">

            {/* NAVBAR */}
            <header className="flex justify-between items-center px-6 py-4">
                
                <Link href="/">
                    <img src="/images/UrbanDrip_logo.png" width="150" />
                </Link>
                
                <nav className="flex gap-6 font-syncopate text-sm">
                    <Link href="/top-picks" className="border-b-2 border-transparent hover:border-black transition">
                        TOP PICKS
                    </Link>
                    <Link href="/blanks" className="border-b-2 border-transparent hover:border-black transition">
                        BLANKS
                    </Link>
                    <Link href="/new-arrivals" className="border-b-2 border-transparent hover:border-black transition">
                        NEW ARRIVALS
                    </Link>
                    <Link href="/bottoms" className="border-b-2 border-transparent hover:border-black transition">
                        BOTTOMS
                    </Link>
                    <Link href="/outerwear" className="border-b-2 border-transparent hover:border-black transition">
                        OUTERWEAR
                    </Link>
                    <Link href="/essentials" className="border-b-2 border-transparent hover:border-black transition">
                        ESSENTIALS
                    </Link>
                    <Link href="/gallery" className="border-b-2 border-transparent hover:border-black transition">
                        GALLERY
                    </Link>
                </nav>

                {/* AUTH */}
                <div className="flex items-center gap-4">
                  
                    {auth.user ? (
                        <Link href={auth.user.role === 'admin'
                        ? route('dashboard')
                        : route('user-dashboard')
                    } className="flex items-center justify-center w-10 h-10 border border-black hover:bg-black hover:text-white transition">
                             <FontAwesomeIcon icon={faUser} />
                        </Link>
                    ) : (
                       <Link 
                            href={route('login')} 
                            className="flex items-center justify-center w-10 h-10 border border-black  hover:bg-black hover:text-white transition"
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    )}

                     <Link  href={route('cart')}  className="flex items-center justify-center w-10 h-10 border border-black hover:bg-black hover:text-white transition">
                        <ShoppingCart size={20} />
                    </Link>
                </div>
            </header>

            {/* PAGE CONTENT */}
            <main className="p-6">
                {children}
            </main>

            <footer className="text-center text-sm text-muted-foreground py-4">
                &copy; {new Date().getFullYear()} UrbanDrip. All rights reserved.
            </footer>
        </div>
    );
}