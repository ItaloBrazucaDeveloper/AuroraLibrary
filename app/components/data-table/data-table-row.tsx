import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type DataTableRowProps = ComponentProps<'tr'>;

export function DataTableRow({ className, ...props }: DataTableRowProps) {
	return (
		<tr
			{...props}
			className={twMerge(
				'hover:bg-zinc-50 transition-all',
				className,
			)}
		/>
	);
}
