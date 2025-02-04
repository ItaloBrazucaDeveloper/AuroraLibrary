import { UserInfo } from './user-info';

export function NavFooter() {
	return (
		<footer className="md:block">
			<UserInfo />
			<p className="text-zinc-600 text-sm mt-1">© 2023 Aurora Library</p>
		</footer>
	);
}
