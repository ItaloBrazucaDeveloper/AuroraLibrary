import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type DataTableHeaderProps = ComponentProps<'thead'>;

export function DataTableHeader({ className, ...props }: DataTableHeaderProps) {
	return <thead {...props} className={twMerge(className, 'text-zinc-500/70 text-sm')} />;
}
