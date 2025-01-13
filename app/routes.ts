import { type RouteConfig, layout, route } from '@react-router/dev/routes';

export default [
	// * matches all URLs, the ? makes it optional so it will match / as well
	layout('./layouts/auth.layout.tsx', [
		route('/', './routes/login.tsx'),
	]),
	layout('./layouts/workspace.layout.tsx', [
		route('/home', './routes/home.tsx'),
		route('/books', './routes/books/index.tsx'),
		route('/clients', './routes/clients/index.tsx'),
		route('/loans', './routes/loans/index.tsx'),
	]),
	route('*?', './routes/not-found.tsx'),
] satisfies RouteConfig;
