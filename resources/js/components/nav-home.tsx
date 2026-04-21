import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Link } from 'lucide-react';
import { createRoot } from 'react-dom/client';
import { route as routeFn } from 'ziggy-js';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      
      {/* LOGO */}
      <img 
        src="/images/UrbanDrip_logo.png" 
        alt="URBANDRIP"
        className="h-10"
      />

      {/* LINKS */}
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="#shop">Shop</Link>
        <Link href="#collections">Collections</Link>
      </div>

    </nav>
  );
}