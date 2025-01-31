import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ModalContentProps = ComponentProps<'div'>;

export function ModalContent({ className, ...props }: ModalContentProps) {
	return (
		<div
			className={twMerge('flex flex-col gap-6', className)}
			{...props}
		/>
	);
}
