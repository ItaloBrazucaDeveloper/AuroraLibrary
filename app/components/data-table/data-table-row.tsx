import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type DataTableRowProps = ComponentProps<'tr'> & {
	hoverEffect?: boolean;
};

export function DataTableRow({
	hoverEffect,
	className,
	...props
}: DataTableRowProps) {
	return (
		<tr
			data-hover-effect={hoverEffect}
			className={twMerge(
				'data-[hover-effect=true]:hover:bg-zinc-50/35 transition-all',
				className,
			)}
			{...props}
		/>
	);
}
