import React, { useState, useEffect } from 'react';
import Table from '@/components/table';
import { Button } from '@/components/ui/button';
import AddUserModal from '@/components/modals/add-user-modal';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { User } from '@/types/users';
import { CheckCircle } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

interface UsersPageProps {
    users: User[];
}

interface PageProps {
    flash: {
        success?: string;
        error?: string;
    };
    [key: string]: unknown;
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
        label: 'Created date',
        render: (value: string) => new Date(value).toLocaleDateString(),
    },
    {
        key: 'status',
        label: 'Status',
    },
];

export default function Users({ users }: UsersPageProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [flash, setFlash] = useState<{ success?: string; error?: string }>({});

    const { flash: pageFlash } = usePage<PageProps>().props;

    // Sync Inertia flash into local state, then auto-dismiss after 4s
    useEffect(() => {
        if (pageFlash?.success || pageFlash?.error) {
            setFlash(pageFlash);

            const timer = setTimeout(() => setFlash({}), 4000);
            return () => clearTimeout(timer);
        }
    }, [pageFlash]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                {/* FLASH MESSAGE */}
                {flash.success && (
                    <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-300">
                        <CheckCircle className="h-4 w-4 shrink-0" />
                        <span>{flash.success}</span>
                        <button
                            onClick={() => setFlash({})}
                            className="ml-auto text-green-600 hover:text-green-900 dark:text-green-400"
                        >
                            ✕
                        </button>
                    </div>
                )}

                {flash.error && (
                    <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
                        <span>⚠️</span>
                        <span>{flash.error}</span>
                        <button
                            onClick={() => setFlash({})}
                            className="ml-auto text-red-600 hover:text-red-900 dark:text-red-400"
                        >
                            ✕
                        </button>
                    </div>
                )}

                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 rounded-xl border md:min-h-min">

                    {/* USER TABLE HEADER */}
                    <div className='flex justify-between items-center p-3'>
                        <h1 className="text-medium font-bold">Users Management</h1>
                        <Button onClick={() => setIsModalOpen(true)} size="sm" type="button">
                            <Plus /> New
                        </Button>
                    </div>

                    {/* TABLE FOR USERS */}
                    <Table data={users} columns={columns} rowKey="id" />
                </div>
            </div>

            {/* ADD USER MODAL */}
            <AddUserModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />

        </AppLayout>
    );
}