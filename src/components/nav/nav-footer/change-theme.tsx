import { MoonStarIcon } from 'lucide-react';

export function ChangeTheme() {
	return (
		<div className="space-y-3 mb-5 text-zinc-200">
			<span className="ml-1 text-sm font-medium text-zinc-500/75">
				Mudar tema
			</span>
			<button className="flex gap-3 items-center rounded-xl py-2 px-4 hover:bg-zinc-700 bg-zinc-800 w-full">
				<MoonStarIcon className="h-5 w-5" />
				Escuro
			</button>
		</div>
	);
}
