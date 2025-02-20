import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ModalHeaderProps = ComponentProps<'header'>;

export function ModalHeader({
	className,
	children,
	...props
}: ModalHeaderProps) {
	return (
		<header {...props}>
			<div
				className={twMerge(
					'relative flex justify-between items-center p-4',
					className,
				)}
			>
				{children}
			</div>
			<hr className='opacity-10' />
		</header>
	);
}
