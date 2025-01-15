import { useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { tv } from 'tailwind-variants';

import { links } from '@utils/nav-links';
import { MapList } from '../utils/map-list';

type NavLinksProps = {
	onChangeSelectedLink: () => void;
};

const navLinks = tv({
	base: 'flex gap-3 py-3 px-4 rounded-md hover:bg-zinc-200/80 hover:text-zinc-800 transition-all',
	variants: {
		selected: {
			true: 'bg-zinc-200/80 text-zinc-950 hover:bg-zinc-200/50',
		},
	},
});

export function NavLinks({ onChangeSelectedLink }: NavLinksProps) {
	const { pathname: actualRoute } = useLocation();
	const [selectedLink, setSelectedLink] = useState<string>(actualRoute);

	function handleSelected(selectedLink: string) {
		setSelectedLink(selectedLink);
		setTimeout(() => onChangeSelectedLink(), 500);
	}

	return (
		<div className="space-y-2">
			<span className="ml-1 text-sm font-medium text-zinc-500/75">Páginas</span>
			<ul className="space-y-4 text-zinc-800">
				<MapList
					list={links}
					callback={({ text, href, icon: Icon }) => (
						<li key={text}>
							<NavLink
								to={href}
								className={navLinks({ selected: selectedLink === href })}
								onClick={() => handleSelected(href)}
							>
								<Icon strokeWidth={1.3} />
								{text}
							</NavLink>
						</li>
					)}
				/>
			</ul>
		</div>
	);
}
