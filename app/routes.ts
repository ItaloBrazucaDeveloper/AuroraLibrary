import { type RouteConfig, layout, route } from '@react-router/dev/routes';

// * matches all URLs, the ? makes it optional so it will match '/' as well
export default [
	layout('./layouts/auth.layout.tsx', [
		route('/', './routes/login/route.tsx'),
	]),

	layout('./layouts/workspace.layout.tsx', [
		route('/home', './routes/home/route.tsx'),
		route('/books/:bookId?', './routes/books/route.tsx'),
		route('/clients/:clientId?', './routes/clients/route.tsx'),
		route('/loans/:loanId?', './routes/loans/route.tsx'),
	]),

	route('*?', './routes/not-found.tsx'),
] satisfies RouteConfig;
