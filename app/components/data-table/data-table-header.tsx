import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { DataTableRow } from './data-table-row';

type DataTableHeaderProps = ComponentProps<'thead'>;

export function DataTableHeader({
	className,
	children,
	...props
}: DataTableHeaderProps) {
	return (
		<thead
			className={twMerge(className, 'text-zinc-500')}
			{...props}
		>
			<DataTableRow className='bg-zinc-50'>{children}</DataTableRow>
		</thead>
	);
}
