import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type DataTableFieldProps = ComponentProps<'td'> & {
	asHeader?: boolean;
};

export function DataTableField({
	className,
	asHeader = false,
	...props
}: DataTableFieldProps) {
	const TableField = asHeader ? 'th' : 'td';

	return (
		<TableField className={twMerge('text-left p-3', className)} {...props} />
	);
}
