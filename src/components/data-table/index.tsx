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
	data: {}[];
	hasEnumarate?: boolean;
	onActionsClicked: (action: 'edit' | 'delete', dataRow: {}) => void;
}

export function DataTable({
	headers,
	data,
	hasEnumarate = false,
	onActionsClicked,
}: DataTableProps) {
	const Fallback = (
		<DataTableRow>
			<DataTableField className="text-center" colSpan={headers.length + 1}>
				Nenhum registro encontrado
			</DataTableField>
		</DataTableRow>
	);

	return (
		<DataTableContainer>
			<DataTableHeader>
				<Show condition={hasEnumarate}>
					<DataTableField asHeader className="p-1 px-3">
						#
					</DataTableField>
				</Show>
				<MapList
					list={headers}
					callback={(header) => (
						<DataTableField key={header} asHeader className="p-1 px-3">
							{header}
						</DataTableField>
					)}
				/>
			</DataTableHeader>
			<DataTableBody>
				<Show condition={data.length > 0} fallback={Fallback}>
					<MapList
						list={data}
						callback={(row, index) => (
							<DataTableRow
								key={index}
								className="rounded-xl hover:scale-[1.01]"
							>
								<Show condition={hasEnumarate}>
									<DataTableField className="first:rounded-l-xl last:rounded-r-xl">
										{index + 1}
									</DataTableField>
								</Show>
								{Object.values(row).map((field, fieldIndex) => (
									<DataTableField
										key={fieldIndex}
										className="first:rounded-l-xl last:rounded-r-xl"
									>
										{String(field)}
									</DataTableField>
								))}
								<DataTableActions
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
