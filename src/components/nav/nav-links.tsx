import { links } from '@utils/nav-links';
import { useState } from 'react';
import { NavLink } from 'react-router';
import { twMerge } from 'tailwind-merge';
import { MapList } from '../utils/map-list';

export function NavLinks() {
	const [selectedLink, setSelectedLink] = useState<string>('Home');

	function handleSelected(selectedLink: string) {
		setSelectedLink(selectedLink);
	}

	const styles = {
		default:
			'flex gap-3 py-3 px-4 rounded-md hover:bg-zinc-200/80 hover:text-zinc-800 transition-all',
		selected: 'bg-zinc-200/80 text-zinc-950 hover:bg-zinc-200/50',
	};

	return (
		<>
			<span className="ml-1 text-sm font-medium text-zinc-500/75">Páginas</span>
			<ul className="space-y-4 text-zinc-800">
				<MapList
					list={links}
					callback={({ text, href, icon: Icon }) => (
						<li key={text}>
							<NavLink
								to={href}
								className={
									selectedLink === text
										? twMerge(styles.default, styles.selected)
										: styles.default
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
