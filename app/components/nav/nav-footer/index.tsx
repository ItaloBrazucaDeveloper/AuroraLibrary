import { ChangeTheme } from './change-theme';
import { UserInfo } from './user-info';

export function NavFooter() {
	return (
		<footer className="md:block">
			<ChangeTheme />
			<hr className="border-zinc-300/60 mb-2" />
			<UserInfo />
			<p className="text-zinc-600 text-sm mt-1">
				© 2023 Aurora Library
			</p>
		</footer>
	);
}
