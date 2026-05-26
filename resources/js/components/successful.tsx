import React, { useState, useEffect } from 'react';
import { Plus, CheckCircle, XCircle } from 'lucide-react';
import usePage from 'node_modules/@inertiajs/react/types/usePage';

interface PageProps {
    flash: {
        success?: string;
        error?: string;
    };
    [key: string]: unknown;
}


const [flash, setFlash] = useState<{ success?: string; error?: string }>({});

    const { flash: pageFlash } = usePage<PageProps>().props;

    useEffect(() => {
        if (pageFlash?.success || pageFlash?.error) {
            setFlash(pageFlash);
            const timer = setTimeout(() => setFlash({}), 4000);
            return () => clearTimeout(timer);
        }
    }, [pageFlash]);



function Successful (){
    return (
        <>
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
        </>
    );
}