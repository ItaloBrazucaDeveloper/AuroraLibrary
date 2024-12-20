import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type DataTableBodyProps = ComponentProps<'tbody'>;

export function DataTableBody({ className, ...props }: DataTableBodyProps) {
	return <tbody {...props} className={twMerge(className, '')} />;
}
