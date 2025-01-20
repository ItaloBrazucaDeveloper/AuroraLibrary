import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type AlertTitle = ComponentProps<'h4'>;

export function AlertTitle({ className, ...props }: AlertTitle) {
	return (
		<h4 className={twMerge('text-sm font-medium', className)} {...props} />
	);
}
