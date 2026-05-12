import React from 'react';

interface TableColumn {
    key: string;
    label: string;
    render?: (value: any, row: any) => React.ReactNode;
}

interface TableProps {
    data: any[];
    columns: TableColumn[];
    rowKey?: string;
}

function Table({ data, columns, rowKey = 'id' }: TableProps) {
    return (
        <table className="w-full table-auto border-collapse rounded-lg border border-sidebar-border/70 bg-white text-left text-sm text-gray-500 rounded-lg">
            <thead className="bg-gray-300 p-4 text-xs uppercase text-gray-700 rounded-lg">
                <tr className="border-b border-sidebar-border/70 text-left text-medium text-gray-500 rounded-lg">
                    {columns.map((column) => (
                        <th key={column.key} className="p-4">
                            {column.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row[rowKey]}>
                        {columns.map((column) => (
                            <td key={column.key} className="p-4">
                                {column.render ? column.render(row[column.key], row) : row[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;