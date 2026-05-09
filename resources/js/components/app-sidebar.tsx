import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { ArrowLeftRight, BookOpen, Folder, LayoutGrid, ListOrdered, PackageOpen, User, Gem, MessageSquareWarning, ChartColumnBig } from 'lucide-react';
import AppLogo from './app-logo';



const mainNavItems: NavItem[] = [
    {
        title: 'Overview',
        url: '/dashboard', 
        icon: LayoutGrid,
    },
     {
        title: 'Orders',
        url: '/orders', 
        icon: ListOrdered,
    },
     {
        title: 'Transactions',
        url: '/transactions', 
        icon: ArrowLeftRight,
    },
 
     {
        title: 'Users',
        url: '/users', 
        icon: User,
    },
    
    
    
    
];
const mainNavItems2: NavItem[] = [
       {
        title: 'Products',
        url: '/products', 
        icon: PackageOpen,
    },
    {
        title: 'Categories',
        url: '/categories', 
        icon: Folder,
    },
    {
        title: 'Promos',
        url: '/promos', 
        icon: Gem,
    }
];

const mainNavItems3: NavItem[] = [
       {
        title: 'Sales Analytics',
        url: '/analytics', 
        icon: ChartColumnBig,
    },
  
];
const footerNavItems: NavItem[] = [
    {
        title: 'Feedback',
        url: 'https://github.com/JmAlano04/online-clothing-store-URBANDRIP',
        icon: MessageSquareWarning,
    },
    // {
    //     title: 'Documentation',
    //     url: 'https://laravel.com/docs/starter-kits',
    //     icon: BookOpen,
    // },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            {/* Menu Navigation */}
            <SidebarContent>
                <NavMain items={mainNavItems} label="MENU" />
                <NavMain items={mainNavItems2} label="INVENTORY" />
                <NavMain items={mainNavItems3} label="ANALYTICS" />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems}  className="mt-auto " />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
