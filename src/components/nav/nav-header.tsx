import { MenuIcon } from 'lucide-react';
import { Logo } from '../logo';

interface NavHeaderProps {
	toggleNav: () => void;
}

export function NavHeader({ toggleNav }: NavHeaderProps) {
	return (
		<>
			<header className="flex items-center justify-between gap-3 p-3 rounded-lg shadow-sm shadow-zinc-400 bg-white/90">
				<Logo />
				<button className="md:hidden" onClick={toggleNav}>
					<MenuIcon />
				</button>
			</header>
			<hr className="hidden md:block border-zinc-300/60 mt-3 mb-5" />
		</>
	);
}
