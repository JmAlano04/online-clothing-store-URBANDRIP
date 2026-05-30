import React from 'react';
import { MoreVertical, UserPen, Trash2 } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface TableColumn {
    key: string;
    label: string;
    render?: (value: any, row: any) => React.ReactNode;
}

interface TableProps {
    data: any[];
    columns: TableColumn[];
    rowKey?: string;

    onEdit?: (row: any) => void;
    onDelete?: (row: any) => void;
}

function Table({
    data,
    columns,
    rowKey = 'id',
    onEdit,
    onDelete,
}: TableProps) {
    return (
        <table className="w-full table-auto border-collapse border border-sidebar-border/70 text-left text-sm text-gray-500">
            <thead className="bg-gray-200 text-xs font-sans text-black">
                <tr className="border-b border-sidebar-border/70">
                    {columns.map((column) => (
                        <th key={column.key} className="p-4">
                            {column.label}
                        </th>
                    ))}

                    {(onEdit || onDelete) && (
                        <th className="p-4 text-right">Actions</th>
                    )}
                </tr>
            </thead>

            <tbody>
                {data.map((row) => (
                    <tr
                        key={row[rowKey]}
                        className="border-b border-sidebar-border/70 hover:bg-gray-100"
                    >
                        {columns.map((column) => (
                            <td key={column.key} className="p-4">
                                {column.render
                                    ? column.render(row[column.key], row)
                                    : row[column.key]}
                            </td>
                        ))}

                        {(onEdit || onDelete) && (
                            <td className="p-4 text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <button className="rounded-md p-2 hover:bg-gray-200">
                                            <MoreVertical className="h-4 w-4" />
                                        </button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent align="end">
                                        {onEdit && (
                                            <DropdownMenuItem
                                                onClick={() => onEdit(row)}
                                            >
                                             <UserPen /> Edit
                                            </DropdownMenuItem>
                                        )}

                                        {onDelete && (
                                            <DropdownMenuItem
                                                className="text-red-500 focus:text-red-500"
                                                onClick={() => onDelete(row)}
                                            >
                                               <Trash2 /> Delete
                                            </DropdownMenuItem>
                                        )}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </td>
                        )}
                    </tr>
                ))}

                {data.length === 0 && (
                    <tr>
                        <td
                            colSpan={
                                columns.length +
                                (onEdit || onDelete ? 1 : 0)
                            }
                            className="p-6 text-center text-gray-500"
                        >
                            No records found.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Table;