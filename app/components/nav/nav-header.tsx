import { Button } from '@components/button';
import { MenuIcon } from 'lucide-react';
import { Logo } from '../logo';

interface NavHeaderProps {
	toggleNav: () => void;
}

export function NavHeader({ toggleNav }: NavHeaderProps) {
	return (
		<>
			<header className="flex items-center justify-between gap-3 px-2 py-3 pb-4">
				<Logo />
				<Button icon={MenuIcon} onClick={toggleNav} className="md:hidden" />
			</header>
			<hr className="border-zinc-300/60 mr-2 w-full" />
		</>
	);
}
