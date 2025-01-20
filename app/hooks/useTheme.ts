import { MoonStarIcon, SunDimIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

type StateThemeType = 'light' | 'dark' | 'system';

export function useTheme() {
	const initalState = {
		actualTheme: 'light',
		nextTheme: {
			icon: MoonStarIcon,
			text: 'Escuro',
		},
	};

	const [theme, setTheme] = useState(initalState);

	useEffect(() => {
		const isDarkMode =
			localStorage.AuroraTheme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches);

		document.documentElement.classList.toggle('dark', isDarkMode);

		localStorage.AuroraTheme = theme;
	}, [theme]);

	function changeTheme(theme: StateThemeType) {
		const themeIsLight = theme === 'light';

		setTheme({
			actualTheme: theme,
			nextTheme: {
				icon: themeIsLight ? MoonStarIcon : SunDimIcon,
				text: themeIsLight ? 'Escuro' : 'Claro',
			},
		});
	}

	return {
		theme,
		changeTheme,
	};
}
