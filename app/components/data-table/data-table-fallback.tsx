import { ComponentProps } from 'react';

type DataTableFallbackProps = ComponentProps<'div'>;

export function DataTableFallback({ children }: DataTableFallbackProps) {
	return <div>{children}</div>;
}
