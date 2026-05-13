import React from 'react';
import Table from '@/components/table';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Plus } from 'lucide-react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

// USER DATA INTERFACE
interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

interface UsersPageProps {
    users: User[];
}


 const columns = [
        {
            key: 'name',
            label: 'Name',
        },
       
        {
            key: 'email',
            label: 'Email',
        },
         {
            key: 'role',
            label: 'Role',
        },
        {
            key: 'created_at',
            label: 'Created At',
            render: (value: string) => new Date(value).toLocaleDateString(),
        },
        {
            key: 'status',
            label: 'Status',
           
        },
        
    ];

export default function Users({ users }: UsersPageProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70  dark:border-sidebar-border relative min-h-[100vh] flex-1 rounded-xl border md:min-h-min">
                    <div className='flex justify-between items-center p-3'>
                        <h1 className="text-medium font-bold">Users Management</h1>

                        <Button size="sm" type="button">
                            <Plus /> New
                        </Button>
                    </div>
                      
                      <Table data={users} columns={columns} rowKey="id" />
                </div>
            </div>
        </AppLayout>
    );
}







   

