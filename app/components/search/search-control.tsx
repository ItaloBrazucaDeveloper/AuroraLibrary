import { Input } from '@components/input';
import { CommandIcon, FilterIcon, SearchIcon, XIcon } from 'lucide-react';
import { ComponentProps } from 'react';
import { useSubmit } from 'react-router';
import { Shortcut } from './shortcut';

type SearchControlProps = Omit<ComponentProps<'input'>, 'type'>;

export function SearchControl({}: SearchControlProps) {
	let submit = useSubmit();

	return (
		<>
			<Input.Label
				title="Campo de busca"
				className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-1/2"
			>
				<SearchIcon className="size-5" />
			</Input.Label>
			<Input.Control
				type="seach"
				placeholder="Buscar"
				className="pl-9 py-2 shadow"
			/>
			<Shortcut />
		</>
	);
}
