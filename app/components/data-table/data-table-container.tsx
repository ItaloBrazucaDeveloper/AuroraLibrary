import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type DataTableContainerProps = ComponentProps<'table'>;

export function DataTableContainer({
	className,
	...props
}: DataTableContainerProps) {
	return (
		<div className="m-3 overflow-x-auto">
			<table
				className={twMerge('border-collapse shadow rounded-lg overflow-hidden w-full', className)}
				{...props}
			/>
		</div>
	);
}
