import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type DataTableContainerProps = ComponentProps<'table'>;

export function DataTableContainer({
	className,
	...props
}: DataTableContainerProps) {
	return (
		<div className="m-3 overflow-x-auto rounded-lg shadow shadow-zinc-100 border border-zinc-200">
			<table
				className={twMerge('border-collapse border overflow-hidden w-full', className)}
				{...props}
			/>
		</div>
	);
}
