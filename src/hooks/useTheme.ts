import { useEffect, useState } from 'react';

type StateThemeType = 'light' | 'dark' | 'system';

export function useTheme() {
	const [theme, setTheme] = useState<StateThemeType>('system');

	useEffect(() => {
		const isDarkMode =
			localStorage.AuroraTheme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches);

		document.documentElement.classList.toggle('dark', isDarkMode);

		localStorage.AuroraTheme = theme;
	}, [theme]);

	function changeTheme(theme: StateThemeType) {
		setTheme(theme);
	}

	return {
		theme,
		changeTheme,
	};
}
