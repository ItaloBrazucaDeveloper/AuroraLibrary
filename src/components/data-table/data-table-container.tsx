import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type DataTableContainerProps = ComponentProps<'table'>;

export function DataTableContainer({
	className,
	...props
}: DataTableContainerProps) {
	return (
		<table
			className={twMerge(className, 'rounded-lg border-collapse m-3')}
			{...props}
		/>
	);
}
