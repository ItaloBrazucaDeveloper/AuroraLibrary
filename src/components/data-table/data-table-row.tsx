import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type DataTableRowProps = ComponentProps<'tr'>;

export function DataTableRow({ className, ...props }: DataTableRowProps) {
	return (
		<tr
			{...props}
			className={twMerge(
				'hover:bg-zinc-100 hover:ring-1 hover:ring-zinc-300 overflow-hidden transition-all',
				className,
			)}
		/>
	);
}
