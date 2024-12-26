import { PenLineIcon, Trash2Icon } from 'lucide-react';
import { DataTableField } from './data-table-field';

type DataTableActionsProps = {
	dataRow: {},
	actions?: 'edit-delete' | 'edit' | 'delete';
	onActionsClicked: (action: 'edit' | 'delete', dataRow: {}) => void;
};

export function DataTableActions({
	dataRow,
	actions = 'edit-delete',
	onActionsClicked,
}: DataTableActionsProps) {
	const hasEditButton = actions === 'edit' || actions === 'edit-delete';
	const hasDeleteButton = actions === 'delete' || actions === 'edit-delete';

	return (
		<DataTableField className="flex gap-3">
			{hasEditButton && (
				<button
					type="button"
					className="flex items-center justify-center"
					onClick={() => onActionsClicked('edit', dataRow)}
				>
					<PenLineIcon className="size-5" strokeWidth={1.5} />
				</button>
			)}
			{hasDeleteButton && (
				<button
					type="button"
					className="flex items-center justify-center"
					onClick={() => onActionsClicked('delete', dataRow)}
				>
					<Trash2Icon className="size-5 text-rose-600" strokeWidth={1.5} />
				</button>
			)}
		</DataTableField>
	);
}
