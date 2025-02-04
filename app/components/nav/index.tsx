import { useState } from 'react';

import { NavContent } from './nav-content';
import { NavFooter } from './nav-footer';
import { NavHeader } from './nav-header';
import { NavLinks } from './nav-links';

export function Nav() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<aside className="flex flex-col p-2 z-50 md:h-full w-full md:max-w-72 md:bg-none md:z-10">
			<NavHeader toggleNav={() => setIsOpen(!isOpen)} />
			<NavContent open={isOpen}>
				<NavLinks onChangeSelectedLink={() => setIsOpen(false)} />
				<NavFooter />
			</NavContent>
		</aside>
	);
}
