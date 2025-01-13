interface HeaderRouteProps {
	routeName: string;
	action: string;
}

export function HeaderRoute({ routeName, action }: HeaderRouteProps) {
	return (
		<header className="p-4 text-xl">
			<h1 className="font-semibold text-3xl">
				<span className="text-zinc-500 font-normal">
					{routeName} \{' '}
				</span>
				{action}
			</h1>
		</header>
	);
}
