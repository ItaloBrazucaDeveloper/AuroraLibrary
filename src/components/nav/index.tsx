import { useState } from 'react';
import { NavFooter } from './nav-footer';
import { NavHeader } from './nav-header';
import { NavLinks } from './nav-links';

export function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<aside className="flex flex-col md:h-full w-full md:max-w-72 md:bg-none">
			<NavHeader toggleNav={() => setIsOpen(!isOpen)} />
			<div
				className={`flex flex-col justify-between md:h-full overflow-y-auto scrollbar-hide ${isOpen ? 'absolute inset-0 top-20 z-10 m-2 p-2 bg-zinc-50' : ''}`}
			>
				<nav className={`space-y-3 md:block ${isOpen ? 'block' : 'hidden'}`}>
					<NavLinks />
				</nav>
				<NavFooter isOpen={isOpen} />
			</div>
		</aside>
	);
}
