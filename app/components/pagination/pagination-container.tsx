import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type PaginationContainerProps = ComponentProps<'div'>;

export function PaginationContainer({
	className,
	...props
}: PaginationContainerProps) {
	return (
		<div
			className={twMerge('flex justify-center items-center gap-2', className)}
			{...props}
		/>
	);
}
