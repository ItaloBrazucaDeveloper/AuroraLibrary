import { ComponentProps } from 'react';

type DataTableBodyProps = ComponentProps<'tbody'>;

export function DataTableBody({ className, ...props }: DataTableBodyProps) {
	return <tbody {...props} className={className} />;
}
