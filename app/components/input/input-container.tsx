import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type InputContainerProps = ComponentProps<'div'> & {
	flowDirection?: 'row' | 'col';
};

export function InputContainer({
	flowDirection = 'col',
	className,
	...props
}: InputContainerProps) {
	return (
		<div
			className={twMerge(
				`relative flex flex-${flowDirection} gap-2`,
				className,
			)}
			{...props}
		/>
	);
}
