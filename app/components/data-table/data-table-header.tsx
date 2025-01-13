import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type DataTableHeaderProps = ComponentProps<'thead'>;

export function DataTableHeader({
	className,
	children,
	...props
}: DataTableHeaderProps) {
	return (
		<thead
			className={twMerge(
				className,
				'text-zinc-500/70 text-sm border-b border-zinc-200/80',
			)}
			{...props}
		>
			<tr>{children}</tr>
		</thead>
	);
}
