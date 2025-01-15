import { Nav } from '@components/nav';
import { Outlet } from 'react-router';

export default function WorkspaceLayout() {
	return (
		<div className="flex flex-col md:flex-row h-svh w-full">
			<Nav />
			<main className="flex flex-col gap-3 size-full md:shadow md:shadow-zinc-300">
				<Outlet />
			</main>
		</div>
	);
}
