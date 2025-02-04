import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

export function links() {
	return [
		{
			rel: 'preconnect',
			href: 'https://fonts.googleapis.com',
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			crossOrigin: 'true',
		},
		{
			href: 'https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap',
			rel: 'stylesheet',
		},
	];
}

export function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Aurora Library</title>
				<Meta />
				<Links />
			</head>
			<body className="antialiased font-lexend-deca">
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function Root() {
	return <Outlet />;
}
