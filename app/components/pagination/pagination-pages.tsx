import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type PaginationPagesProps = ComponentProps<'ul'>;

export function PaginationPages({ className, ...props }: PaginationPagesProps) {
	return <ul className={twMerge('flex gap-4', className)} {...props} />;
}
