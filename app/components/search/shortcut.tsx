import { CommandIcon } from 'lucide-react';

export function Shortcut() {
	return (
		<div className="group-has-[input:focus]:hidden flex gap-1 items-center absolute right-3 top-1/2 -translate-y-1/2 text-zinc-700">
			<div className="bg-zinc-200/60 px-1.5 py-1.5 rounded">
				<CommandIcon className="size-3" />
			</div>
			<span className="bg-zinc-200/60 text-sm px-2 py-0.5 rounded">K</span>
		</div>
	);
}
