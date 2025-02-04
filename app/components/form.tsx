import { FormProps, Form as FormReactRouter } from 'react-router';
import { twMerge } from 'tailwind-merge';

export function Form({ className, ...props }: FormProps) {
	return (
		<FormReactRouter
			className={twMerge(
				'grid gap-3 min-w-96 rounded-lg ring-1 ring-zinc-300 shadow-md',
				className,
			)}
			{...props}
		/>
	);
}
