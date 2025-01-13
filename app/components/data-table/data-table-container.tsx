import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type DataTableContainerProps = ComponentProps<'table'>;

export function DataTableContainer({
	className,
	...props
}: DataTableContainerProps) {
	return (
		<div className="m-3 p-3 ring-1 ring-zinc-200 rounded-lg overflow-x-auto">
			<table
				className={twMerge('border-collapse w-full', className)}
				{...props}
			/>
		</div>
	);
}
