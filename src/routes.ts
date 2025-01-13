import { type RouteConfig, layout, route } from '@react-router/dev/routes';

export default [
	// * matches all URLs, the ? makes it optional so it will match / as well
	layout('./layouts/workspace.layout.tsx', [
		route('/', './pages/home.tsx'),
		route('/books', './pages/books/index.tsx'),
		route('/clients', './pages/clients/index.tsx'),
		route('/loans', './pages/loans/index.tsx'),
	]),
	route('*?', './pages/not-found.tsx'),
] satisfies RouteConfig;
