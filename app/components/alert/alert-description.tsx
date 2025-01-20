import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type AlertDescriptionProps = ComponentProps<'span'>;

export function AlertDescription({
	className,
	...props
}: AlertDescriptionProps) {
	return <span className={twMerge('text-sm', className)} {...props} />;
}
