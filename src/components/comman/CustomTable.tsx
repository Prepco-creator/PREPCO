/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react';

type GenericObject = Record<string, any>;

type TransposedRow = {
    feature: string;
    [planTitle: string]: React.ReactNode;
};

type AdditionalRow<T = GenericObject> = {
    rowName: string;
    render: (row: T) => React.ReactNode;
    index?: number;
    keyOverride?: string;
};

type AutoTransposingTableProps = {
    data: GenericObject[];
    getTitle: (item: GenericObject) => string;
    additionalRows?: AdditionalRow[]; // 👈 New prop
    hiddenKeys?: string[];
};

export default function AutoTransposingTable({
    data,
    getTitle,
    additionalRows = [],
    hiddenKeys = [],
}: AutoTransposingTableProps) {
    if (data.length === 0) return <div>No data</div>;

    const extractFlatEntries = (
        obj: GenericObject,
        parentKey = ''
    ): [string, any][] => {
        return Object.entries(obj)
            .filter(([key]) => key !== 'Plan Title')
            .flatMap(([key, value]) => {
                const newKey = parentKey ? `${parentKey}.${key}` : key;
                if (
                    value &&
                    typeof value === 'object' &&
                    !Array.isArray(value) &&
                    value !== null
                ) {
                    return extractFlatEntries(value, newKey);
                }
                return [[newKey, value]];
            });
    };

    const allKeysSet = new Set<string>();
    const flattenedData = data.map((item) => {
        const entries = extractFlatEntries(item);
        entries.forEach(([key]) => allKeysSet.add(key));
        return Object.fromEntries(entries);
    });

    const allKeys = Array.from(allKeysSet);

    const rows: TransposedRow[] = allKeys
        .filter((key) => !hiddenKeys?.includes(key)) // 👈 Filter here
        .map((key) => {
            const row: TransposedRow = { feature: key };
            data.forEach((item, index) => {
                const title = getTitle(item);
                row[title] = flattenedData[index][key] ?? '-';
            });
            return row;
        });


    // ➕ Add additional rows
    additionalRows.forEach(({ rowName, render, index, keyOverride }) => {
        const row: TransposedRow = { feature: rowName };

        data.forEach((item) => {
            const title = getTitle(item); // Column key
            row[title] = render(item);    // Rendered cell
        });

        if (typeof keyOverride === 'string') {
            const targetIndex = rows.findIndex((r) => r.feature === keyOverride);
            if (targetIndex !== -1) {
                // Replace the whole row
                rows.splice(targetIndex, 1, row);
            } else {
                console.warn(`Row with feature "${keyOverride}" not found.`);
            }

        } else {
            if (typeof index === 'number' && index >= 0 && index <= rows.length) {
                rows.splice(index, 0, row);
            } else {
                rows.push(row);
            }
        }
    });

    const columns = [
        { key: 'feature', header: 'Feature' },
        ...data.map((item) => {
            const title = getTitle(item);
            return {
                key: title,
                header: title,
            };
        }),
    ];

    return (
        <section className="bg-white px-4 py-2 static lg:relative">
            <div className="block lg:hidden relative overflow-auto rounded-lg max-h-[600px]">
                <table className="w-full text-sm text-left text-gray-700 dark:text-gray-200 border-collapse">
                    <thead className="text-xs uppercase bg-gray-100">
                        <tr>
                            {columns.map((col, index) => (
                                <th
                                    key={index}
                                    className={`bg-primary text-center text-white p-3 shadow-double-inset border border-black px-6 py-4 ${index === 0
                                        ? 'sticky top-0 left-0 z-[40]'
                                        : 'sticky top-0 z-[30]'
                                        }`}
                                >
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="bg-white h-full">
                                {columns.map((col, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={`px-6 py-4 border border-black h-full ${colIndex === 0
                                            ? 'sticky left-0 z-[20] bg-primary text-white p-3 shadow-double-inset'
                                            : 'bg-white'
                                            }`}
                                    >
                                        {row[col.key] as React.ReactNode}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <table className="hidden lg:block w-full text-sm text-left text-gray-700 dark:text-gray-200 border-collapse">
                <thead className="text-xs uppercase bg-gray-100">
                    <tr>
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                className={`bg-primary text-center sticky top-[70px] text-white p-3 shadow-double-inset border border-black px-6 py-4 ${index === 0
                                    ? 'left-0 z-[40]'
                                    : 'z-[30]'
                                    }`}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white h-full">
                            {columns.map((col, colIndex) => (
                                <td
                                    key={colIndex}
                                    className={`px-6 py-4 border border-black h-full ${colIndex === 0
                                        ? 'sticky left-0 z-[20] bg-primary text-white p-3 shadow-double-inset'
                                        : 'bg-white text-center'
                                        }`}
                                >
                                    {row[col.key] as React.ReactNode}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </section>
    );
}
