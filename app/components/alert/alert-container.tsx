import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type AlertContainerProps = ComponentProps<'div'>;

export function AlertContainer({ className, ...props }: AlertContainerProps) {
	return (
		<div
			className={twMerge(
				'relative space-x-3 min-h-16 py-2 px-3 outline outline-2 outline-zinc-200 rounded-lg',
				'[&>svg]:-translate-y-1/2 [&>svg]:absolute [&>svg]:left-3 [&>svg]:top-1/2 [&>svg]:text-foreground [&>svg~*]:pl-8',
				className,
			)}
			{...props}
		/>
	);
}
