import { Input } from '@components/input';
import { SearchIcon } from 'lucide-react';
import { ComponentProps, ElementRef, useEffect, useRef } from 'react';
import { Shortcut } from './shortcut';

type SearchControlProps = Omit<ComponentProps<'input'>, 'type'>;

export function SearchControl({}: SearchControlProps) {
	const searchRef = useRef<ElementRef<'input'>>(null);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
				e.preventDefault();
				searchRef.current?.focus();
			}
		};
		document.onkeydown = handleKeyDown;

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<>
			<div className="fixed inset-0 size-full bg-zinc-950/50 hidden z-30 md:group-has-[input:focus]:flex" />

			<Input.Label
				title="Campo de busca"
				className="absolute z-40 left-5 top-1/2 -translate-y-1/2 -translate-x-1/2"
			>
				<SearchIcon className="size-5" />
			</Input.Label>

			<Input.Control
				type="search"
				ref={searchRef}
				placeholder="Buscar"
				className="pl-9 py-2 shadow bg-zinc-50 z-30"
			/>

			<Shortcut />
		</>
	);
}
