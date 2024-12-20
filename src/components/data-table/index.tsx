import { MapList } from '../utils/map-list';
import { Show } from '../utils/show';
import { DataTableBody } from './data-table-body';
import { DataTableContainer } from './data-table-container';
import { DataTableField } from './data-table-field';
import { DataTableHeader } from './data-table-header';
import { DataTableRow } from './data-table-row';

interface DataTableProps {
	headers: string[];
	data: {}[];
	hasEnumarate?: boolean;
}

export function DataTable({
	headers,
	data,
	hasEnumarate = false,
}: DataTableProps) {
	const fallback = (
		<DataTableRow className="text-center">
			<DataTableField colSpan={headers.length}>
				Nenhum registro encontrado
			</DataTableField>
		</DataTableRow>
	);

	return (
		<DataTableContainer>
			<DataTableHeader>
				<DataTableRow>
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
				</DataTableRow>
			</DataTableHeader>
			<DataTableBody>
				<Show condition={data.length > 0} fallback={fallback}>
					<MapList
						list={data}
						callback={(row, index) => (
							<DataTableRow key={index}>
								<Show condition={hasEnumarate}>
									<DataTableField>{index + 1}</DataTableField>
								</Show>
								{Object.values(row).map((field, fieldIndex) => (
									<DataTableField key={fieldIndex}>
										{String(field)}
									</DataTableField>
								))}
							</DataTableRow>
						)}
					/>
				</Show>
			</DataTableBody>
		</DataTableContainer>
	);
}
