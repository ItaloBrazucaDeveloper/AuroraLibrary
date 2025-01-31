import { Input } from '@components/input';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type SearchContainerProps = ComponentProps<'div'>;

export function SearchContainer({ className, ...props }: SearchContainerProps) {
	return (
		<Input.Container className={twMerge('group min-w-96', className)} {...props} />
	);
}
