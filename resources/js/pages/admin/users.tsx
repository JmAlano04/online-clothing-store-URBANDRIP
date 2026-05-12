import React from 'react';
import Table from '@/components/table';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

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
            key: 'role',
            label: 'Role',
        },
        {
            key: 'email',
            label: 'Email',
        },
        {
            key: 'action',
            label: 'Action',
            render: (value: any, row: User) => (
                <div>
                    <a href={`/users/${row.id}/edit`} className="text-blue-500 hover:underline">
                        Edit
                    </a>
                    {' | '}
                    <a href={`/users/${row.id}`} className="text-green-500 hover:underline">
                        View
                    </a>
                </div>
            ),
        },
    ];

export default function Users({ users }: UsersPageProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                  
                    
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 rounded-xl border md:min-h-min">
                      <h1 className="text-2xl font-bold mb-6">Users Management</h1>
                      <Table data={users} columns={columns} rowKey="id" />
                </div>
            </div>
        </AppLayout>
    );
}







   

