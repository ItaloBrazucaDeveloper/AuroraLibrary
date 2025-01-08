import { useState } from 'react';

export function useTheme() {
	type StateThemeType = 'light' | 'dark' | 'system';

	const [theme, setTheme] = useState<StateThemeType>('system');

	function changeTheme(theme: StateThemeType) {
		setTheme(theme);
	}

	return {
		theme,
		changeTheme,
	};
}
