import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { getContext } from './input-context';
import { Label } from '@components/label';

type InputLabelProps = ComponentProps<'label'>;

export function InputLabel({ className, ...props }: InputLabelProps) {
	const { inputId } = getContext();

	return (
		<Label
			htmlFor={inputId}
			className={twMerge('px-1 text-zinc-800', className)}
			{...props}
		/>
	);
}
