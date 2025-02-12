import { Button } from '@components/button';
import { ImageWithFallback } from '@components/image-with-fallback';
import { Nav } from '@components/nav';

import { MapList } from '@components/utils/map-list';
import { navLinks } from '@utils/nav-links';
import { LogOutIcon } from 'lucide-react';

import { Outlet } from 'react-router';

export default function WorkspaceLayout() {
	return (
		<div className="min-h-screen w-full bg-zinc-50">
			<header className="flex items-center gap-10 w-full py-4 px-7 shadow-sm">
				<ImageWithFallback
					src="/logo.png"
					alt="Logo da biblioteca Aurora Library"
					className="size-8 p-1.5 rounded-md bg-zinc-900"
				/>

				<Nav.Container>
					<MapList
						list={navLinks}
						callback={({ icon: Icon, text, to }) => (
							<Nav.Anchor to={to}>
								<Icon className="size-5" />
								<span>{text}</span>
							</Nav.Anchor>
						)}
					/>
				</Nav.Container>

				<Button theme="no-outlined">
					<LogOutIcon className="size-5" />
				</Button>
			</header>

			<main className="flex flex-col gap-3 flex-1">
				<Outlet />
			</main>
		</div>
	);
}
