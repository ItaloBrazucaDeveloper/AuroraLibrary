import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ModalFooterProps = ComponentProps<'footer'>;

export function ModalFooter({ className, ...props }: ModalFooterProps) {
	return (
		<footer
			className={twMerge('flex justify-end gap-3 p-4 mt-auto', className)}
			{...props}
		/>
	);
}
