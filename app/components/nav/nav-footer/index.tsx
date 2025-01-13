import { ChangeTheme } from './change-theme';
import { UserInfo } from './user-info';

interface NavFooterProps {
	isOpen: boolean;
}

export function NavFooter({ isOpen }: NavFooterProps) {
	return (
		<footer className={`${isOpen ? 'block' : 'hidden'} md:block`}>
			<ChangeTheme />
			<hr className="border-zinc-300/60 mb-2" />
			<UserInfo />
			<p className="text-zinc-600 text-sm mt-1">© 2023 Aurora Library</p>
		</footer>
	);
}
