import { FormProps, Form as FormReactRouter } from 'react-router';
import { twMerge } from 'tailwind-merge';

export function Form({ className, ...props }: FormProps) {
	return (
		<FormReactRouter
			className={twMerge(
				'grid gap-7 min-w-96 px-4',
				className,
			)}
			{...props}
		/>
	);
}
