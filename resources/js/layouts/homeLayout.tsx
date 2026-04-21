
import { Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { ShoppingCart } from 'lucide-react';


export default function HomeLayout({ children }: { children: React.ReactNode }) {
    const { auth } = usePage<SharedData>().props;

    const { url } = usePage();

    return (
        <div className="min-h-screen  pt-4  bg-[#F0F0F0]">

            {/* NAVBAR */}
            <header className="flex justify-between items-center px-20 py-4">
                
                <Link href="/">
                    <img src="/images/UrbanDrip_logo.png" width="150" />
                </Link>
                
                <nav className="flex gap-6 font-syncopate text-sm">
                    <Link href="/top-picks" className={`border-b-2 transition ${
                        url === "/top-picks" ? "border-black" : "border-transparent"
                    }`}>
                        TOP PICKS
                    </Link>
                    <Link href="/blanks" className={`border-b-2 transition ${
                        url === "/blanks" ? "border-black" : "border-transparent"
                    }`}>    
                        BLANKS
                    </Link>
                    <Link href="/new-arrivals" className={`border-b-2 transition ${
                        url === "/new-arrivals" ? "border-black" : "border-transparent"
                    }`}>
                        NEW ARRIVALS
                    </Link>
                    <Link href="/bottoms" className={`border-b-2 transition ${
                        url === "/bottoms" ? "border-black" : "border-transparent"
                    }`}>
                        BOTTOMS
                    </Link>
                    <Link href="/outerwear" className={`border-b-2 transition ${
                        url === "/outerwear" ? "border-black" : "border-transparent"
                    }`}>
                        OUTERWEAR
                    </Link>
                    <Link href="/essentials" className={`border-b-2 transition ${
                        url === "/essentials" ? "border-black" : "border-transparent"
                    }`}>
                        ESSENTIALS
                    </Link>
                    <Link href="/gallery" className={`border-b-2 transition ${
                        url === "/gallery" ? "border-black" : "border-transparent"
                    }`}>
                        GALLERY
                    </Link>
                </nav>

                {/* AUTH */}
                <div className="flex items-center  gap-4">
                  
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
            <main className="">
                {children}
            </main>

            <footer className="text-center text-sm text-muted-foreground py-4">
                &copy; {new Date().getFullYear()} UrbanDrip. All rights reserved.
            </footer>
        </div>
    );
}