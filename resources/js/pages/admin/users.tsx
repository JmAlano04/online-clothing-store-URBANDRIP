import React, { useState, useEffect } from 'react';
import Table from '@/components/table';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Plus, CheckCircle, XCircle } from 'lucide-react';
import { User } from '@/types/users';
import ReusableFormModal from '@/components/modals/reusable-form-modal';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Users', href: '/users' },
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
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    {
        key: 'created_at',
        label: 'Created date',
        render: (value: string) => new Date(value).toLocaleDateString(),
    },
    { key: 'status', label: 'Status' },
];

export default function Users({ users }: UsersPageProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [flash, setFlash] = useState<{ success?: string; error?: string }>({});

    const { flash: pageFlash } = usePage<PageProps>().props;

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

                {/* ✅ FLASH MESSAGES */}
                {flash.success && (
                    <div className="flex items-center gap-2 rounded-md bg-green-50 border border-green-200 p-4 text-green-700">
                        <CheckCircle className="h-5 w-5 shrink-0" />
                        <span>{flash.success}</span>
                    </div>
                )}
                {flash.error && (
                    <div className="flex items-center gap-2 rounded-md bg-red-50 border border-red-200 p-4 text-red-700">
                        <XCircle className="h-5 w-5 shrink-0" /> {/* ✅ fixed icon */}
                        <span>{flash.error}</span>
                    </div>
                )}

                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 rounded-xl border md:min-h-min">

                    {/* HEADER */}
                    <div className='flex justify-between items-center p-3'>
                        <h1 className="text-medium font-bold">Users Management</h1>
                        <Button onClick={() => setIsModalOpen(true)} size="sm" type="button">
                            <Plus /> New
                        </Button>
                    </div>

                    {/* TABLE */}
                    <Table data={users} columns={columns} rowKey="id" />
                </div>
            </div>

            {/* ADD USER MODAL */}
            <ReusableFormModal
                isOpen={isModalOpen}
                onOpenChange={setIsModalOpen}
                title="Add User"
                description="Fill in the details to add a new user."
                endpoint="/users"
                method="post"
                fields={[
                    {
                        name: 'name',
                        label: 'Name',
                        type: 'text',
                        placeholder: 'Enter user name',
                        required: true,
                    },
                    {
                        name: 'email',
                        label: 'Email',
                        type: 'email',
                        placeholder: 'Enter user email',
                        required: true,
                    },
                    {
                        name: 'password',         // ✅ added — required by controller
                        label: 'Password',
                        type: 'password',
                        placeholder: 'Min. 8 characters',
                        required: true,
                    },
                    {
                        name: 'role',
                        label: 'Role',
                        type: 'select',
                        options: [
                            { label: 'Admin', value: 'admin' },
                            { label: 'User', value: 'user' },
                        ],
                        required: true,
                    },
                    
                ]}
                initialValues={{
                    name: '',
                    email: '',
                    password: '',   // ✅ added
                    role: '',
                    status: '',
                }}
            />
        </AppLayout>
    );
}