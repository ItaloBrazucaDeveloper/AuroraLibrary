import { Button } from '@components/button';
import { MoonStarIcon, SunDimIcon } from 'lucide-react';
import { useState } from 'react';

export function ChangeTheme() {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	let nextTheme = {
		text: 'Escuro',
		icon: MoonStarIcon,
	};

	if (theme === 'dark') {
		nextTheme = {
			text: 'Claro',
			icon: SunDimIcon,
		};
	}

	return (
		<div className="space-y-3 mb-5 text-zinc-200">
			<span className="ml-1 text-sm font-medium text-zinc-500/75">
				Mudar tema
			</span>
			<Button
				variant="dark"
				icon={nextTheme.icon}
				className="rounded-xl py-2 px-4 w-full"
			>
				{nextTheme.text}
			</Button>
		</div>
	);
}
