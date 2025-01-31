import { MapList } from '../utils/map-list';
import { Show } from '../utils/show';

import { DataTableActions } from './data-table-actions';
import { DataTableBody } from './data-table-body';
import { DataTableContainer } from './data-table-container';

import { DataTableField } from './data-table-field';
import { DataTableHeader } from './data-table-header';
import { DataTableRow } from './data-table-row';

interface DataTableProps {
	headers: string[];
	data?: {}[];
	onActionsClicked: (action: 'edit' | 'delete') => void;
}

export function DataTable({
	headers,
	data = [],
	onActionsClicked,
}: DataTableProps) {
	const Fallback = (
		<DataTableRow className="hover:bg-transparent hover:ring-0">
			<DataTableField className="text-center" colSpan={headers.length + 1}>
				Nenhum registro encontrado
			</DataTableField>
		</DataTableRow>
	);

	return (
		<DataTableContainer>
			<DataTableHeader>
				<DataTableField asHeader>#</DataTableField>
				<MapList
					list={headers}
					callback={(header) => (
						<DataTableField key={header} asHeader>
							{header}
						</DataTableField>
					)}
				/>
			</DataTableHeader>
			<DataTableBody>
				<Show condition={data?.length > 0} fallback={Fallback}>
					<MapList
						list={data}
						callback={(row, index) => (
							<DataTableRow key={index}>
								<DataTableField>{index + 1}</DataTableField>
								{Object.values(row).map((field: any, fieldIndex) => (
									<DataTableField key={fieldIndex}>{field}</DataTableField>
								))}
								<DataTableActions
									data-id={row.id}
									dataRow={row}
									actions="edit-delete"
									onActionsClicked={onActionsClicked}
								/>
							</DataTableRow>
						)}
					/>
				</Show>
			</DataTableBody>
		</DataTableContainer>
	);
}
