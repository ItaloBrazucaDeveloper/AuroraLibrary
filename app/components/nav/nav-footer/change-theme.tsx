import { Button } from '@components/button';
import { useTheme } from '@hooks/useTheme';

export function ChangeTheme() {
	const {
		theme: { actualTheme, nextTheme },
		changeTheme,
	} = useTheme();

	return (
		<div className="space-y-3 mb-5 text-zinc-200">
			<span className="ml-1 text-sm font-medium text-zinc-500/75">
				Mudar tema
			</span>
			<Button
				variant={actualTheme === 'light' ? 'dark' : 'outlined'}
				icon={nextTheme.icon}
				onClick={() => changeTheme(actualTheme === 'light' ? 'dark' : 'light')}
				className="rounded-xl py-2 px-4 w-full"
			>
				{nextTheme.text}
			</Button>
		</div>
	);
}
