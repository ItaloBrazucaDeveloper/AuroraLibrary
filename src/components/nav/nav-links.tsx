import { useState } from 'react';
import { NavLink } from 'react-router';
import { links } from '../../utils/nav-links';
import { MapList } from '../utils/map-list';

export function NavLinks() {
	const [selectedLink, setSelectedLink] = useState<string>('Home');

	const defaultStyles =
		'flex gap-3 py-3 px-4 rounded-md hover:bg-zinc-200/80 hover:text-zinc-800';
	const selectedStyles =
		'flex gap-3 py-3 px-4 rounded-md hover:text-zinc-800 bg-zinc-200/80 text-zinc-950 hover:bg-zinc-200/50';

	function handleSelected(selectedLink: string) {
		setSelectedLink(selectedLink);
	}

	return (
		<>
			<span className="ml-1 text-sm font-medium text-zinc-500/75">
				Páginas
			</span>
			<ul className="space-y-4 text-zinc-800">
				<MapList
					list={links}
					callback={({ text, href, icon: Icon }) => (
						<li key={text}>
							<NavLink
								to={href}
								className={
									selectedLink === text ? selectedStyles : defaultStyles
								}
								onClick={() => handleSelected(text)}
							>
								<Icon strokeWidth={1.3} />
								{text}
							</NavLink>
						</li>
					)}
				/>
			</ul>
		</>
	);
}
