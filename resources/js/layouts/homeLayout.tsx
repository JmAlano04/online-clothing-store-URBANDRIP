
import { Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';


export default function HomeLayout({ children }: { children: React.ReactNode }) {
    const { auth } = usePage<SharedData>().props;
    const { url } = usePage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/top-picks", label: "TOP PICKS" },
        { href: "/blanks", label: "BLANKS" },
        { href: "/new-arrivals", label: "NEW ARRIVALS" },
        { href: "/bottoms", label: "BOTTOMS" },
        { href: "/outerwear", label: "OUTERWEAR" },
        { href: "/essentials", label: "ESSENTIALS" },
        { href: "/gallery", label: "GALLERY" },
    ];

    return (
        <div className="min-h-screen pt-4 bg-[#F0F0F0]">

            {/* NAVBAR */}
            <header className="flex justify-between items-center px-4 md:px-8 lg:px-20 py-4">
                
                <Link href="/">
                    <img src="/images/UrbanDrip_logo.png" width="120" className="w-24 md:w-32 lg:w-40" />
                </Link>
                
                
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-4 xl:gap-4 font-syncopate text-xs xl:text-sm ">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={`border-b-2 transition ${
                            url === link.href ? "border-black" : "border-transparent"
                        }`}>
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Auth */}
                <div className="hidden lg:flex items-center gap-4">
                    {auth.user ? (
                        <Link href={auth.user.role === 'admin'
                        ? route('admin.dashboard')
                        : route('user-dashboard')
                    } className="flex items-center justify-center w-10 h-10 border border-black hover:bg-black hover:text-white transition">
                             <FontAwesomeIcon icon={faUser} />
                        </Link>
                    ) : (
                       <Link 
                            href={route('login')} 
                            className="flex items-center justify-center w-10 h-10 border border-black hover:bg-black hover:text-white transition"
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    )}

                     <Link href={route('cart')} className="flex items-center justify-center w-10 h-10 border border-black hover:bg-black hover:text-white transition">
                        <ShoppingCart size={20} />
                    </Link>
                </div>
            </header>

            {/* <div>
                <button>Seach</button>
            </div> */}

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-16 bg-white z-50">
                    <nav className="flex flex-col items-center gap-6 pt-8 font-syncopate text-lg">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                className={`border-b-2 transition ${
                                    url === link.href ? "border-black" : "border-transparent"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        
                        <div className="flex gap-4 mt-4">
                            {auth.user ? (
                                <Link href={auth.user.role === 'admin' ? route('dashboard') : route('user-dashboard')} 
                                    className="flex items-center justify-center w-10 h-10 border border-black hover:bg-black hover:text-white transition">
                                     <FontAwesomeIcon icon={faUser} />
                                </Link>
                            ) : (
                               <Link href={route('login')} className="flex items-center justify-center w-10 h-10 border border-black hover:bg-black hover:text-white transition">
                                    <FontAwesomeIcon icon={faUser} />
                                </Link>
                            )}
                            <Link href={route('cart')} className="flex items-center justify-center w-10 h-10 border border-black hover:bg-black hover:text-white transition">
                                <ShoppingCart size={20} />
                            </Link>
                        </div>
                    </nav>
                </div>
            )}

            {/* Mobile Bottom Bar */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 z-40">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <Menu size={20} />
                </button>
                {auth.user ? (
                    <Link href={auth.user.role === 'admin' ? route('dashboard') : route('user-dashboard')}>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                ) : (
                    <Link href={route('login')}>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                )}
                <Link href={route('cart')}>
                    <ShoppingCart size={20} />
                </Link>
            </div>

            {/* PAGE CONTENT */}
            <main className="pb-20 lg:pb-0">
                {children}
            </main>

            <footer className="text-center text-sm text-muted-foreground py-4 pb-20 lg:pb-4">
                &copy; {new Date().getFullYear()} UrbanDrip. All rights reserved.
            </footer>
        </div>
    );
}