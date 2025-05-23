import { PenLineIcon, Trash2Icon } from 'lucide-react';
import { DataTableField } from './data-table-field';

type DataTableActionsProps = {
	dataRow: {};
	actions?: 'edit-delete' | 'edit' | 'delete';
	onActionsClicked: (action: 'edit' | 'delete', dataRow: {}) => void;
};

export function DataTableActions({
	dataRow,
	onActionsClicked,
	actions = 'edit-delete',
}: DataTableActionsProps) {
	const hasEditButton = actions === 'edit' || actions === 'edit-delete';
	const hasDeleteButton = actions === 'delete' || actions === 'edit-delete';

	return (
		<DataTableField className="space-x-2">
			{hasEditButton && (
				<button
					type="button"
					className="inline"
					onClick={() => onActionsClicked('edit', dataRow)}
				>
					<PenLineIcon className="size-5" strokeWidth={1.5} />
				</button>
			)}
			{hasDeleteButton && (
				<button
					type="button"
					className="inline"
					onClick={() => onActionsClicked('delete', dataRow)}
				>
					<Trash2Icon className="size-5 text-rose-600" strokeWidth={1.5} />
				</button>
			)}
		</DataTableField>
	);
}
