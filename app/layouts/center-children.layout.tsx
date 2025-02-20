import { Outlet } from 'react-router';

export default function CenterChildrenLayout() {
	return (
		<div className="h-screen w-full grid place-items-center">
			<Outlet />
		</div>
	);
}
