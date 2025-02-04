import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type BackdropProps = ComponentProps<'div'>;

export function Backdrop({ className, ...props }: BackdropProps) {
	return (
		<div
			className={twMerge(
				'fixed z-10 inset-0 bg-zinc-950/40 size-full',
				className,
			)}
			{...props}
		/>
	);
}
