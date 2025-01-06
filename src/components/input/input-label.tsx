import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type InputLabelProps = ComponentProps<'label'>;

export function InputLabel({ className, ...props }: InputLabelProps) {
	return (
		<label className={twMerge('px-1 text-zinc-800', className)} {...props} />
	);
}
