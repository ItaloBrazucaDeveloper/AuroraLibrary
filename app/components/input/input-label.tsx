import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { getContext } from './input-context';

type InputLabelProps = ComponentProps<'label'>;

export function InputLabel({ className, ...props }: InputLabelProps) {
	const { inputId } = getContext();

	return (
		<label
			htmlFor={inputId}
			className={twMerge('px-1 text-zinc-800', className)}
			{...props}
		/>
	);
}
