import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type NavContainerProps = ComponentProps<'nav'>;

export function NavContainer({ className, ...props }: NavContainerProps) {
	return (
		<nav className={twMerge('flex flex-grow gap-6', className)} {...props} />
	);
}
