import React from 'react';

interface TableColumn {
    key: string;
    label: string;
    render?: (value: any, row: any) => React.ReactNode;
}

interface RowSelection {
    selectedRowKey?: string | number | null;
    onChange: (row: any) => void;
    name?: string;
}

interface TableProps {
    data: any[];
    columns: TableColumn[];
    rowKey?: string;
    rowSelection?: RowSelection;
}

function Table({ data, columns, rowKey = 'id', rowSelection }: TableProps) {
    const hasSelection = Boolean(rowSelection);
    const selectionName = rowSelection?.name ?? `table-selection-${rowKey}`;

    return (
        <table className="w-full table-auto border-collapse border border-sidebar-border/70  text-left text-sm text-gray-500 ">
            <thead className="p-4 text-xs bg-gray-200 font-sans text-black rounded-lg">
                <tr className="border-b border-sidebar-border/70 text-left text-medium text-gray-500 rounded-lg">
                    {hasSelection && <th className="p-4 w-12">Select</th>}
                    {columns.map((column) => (
                        <th key={column.key} className="p-4 ">
                            {column.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row[rowKey]} className='hover:bg-gray-100 border-b border-sidebar-border/70 text-left text-sm text-gray-500 rounded-lg'>
                        {hasSelection && (
                            <td className="p-4">
                                <input
                                    type="radio"
                                    name={selectionName}
                                    checked={rowSelection?.selectedRowKey === row[rowKey]}
                                    onChange={() => rowSelection?.onChange(row)}
                                    className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                                />
                            </td>
                        )}
                        {columns.map((column) => (
                            <td key={column.key} className="p-4 ">
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