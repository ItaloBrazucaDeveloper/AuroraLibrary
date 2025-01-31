import { Button } from '@components/button';
import { MoonStarIcon } from 'lucide-react';

export function ChangeTheme() {
	return (
		<div className="space-y-3 mb-5 text-zinc-200">
			<span className="ml-1 text-sm font-medium text-zinc-500/75">
				Mudar tema
			</span>
			<Button
				variant='dark'
				icon={MoonStarIcon}
				onClick={() => {}}
				className="rounded-xl py-2 px-4 w-full"
			>
				Escuro
			</Button>
		</div>
	);
}
