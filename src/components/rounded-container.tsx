import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type RoundedContainerProps = ComponentProps<'div'>;

export function RoundedContainer({
	className,
	...props
}: RoundedContainerProps) {
	return (
		<div
			className={twMerge(
				'flex flex-col gap-3 h-full w-full bg-white/85 shadow-md rounded-lg',
				className,
			)}
			{...props}
		/>
	);
}
