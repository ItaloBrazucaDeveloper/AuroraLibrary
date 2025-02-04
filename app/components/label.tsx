import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type LabelProps = ComponentProps<'label'>;

export function Label({ className, ...props }: LabelProps) {
	return (
		<label className={twMerge('px-1 text-zinc-700', className)} {...props} />
	);
}
