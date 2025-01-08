import { BrowserRouter, Route, Routes } from 'react-router';
import { Nav } from './components/nav';
import * as Pages from './routes';

export default function App() {
	return (
		<div className="flex flex-col md:flex-row gap-3 bg-zinc-100 h-svh p-2">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route index element={<Pages.Home />} />
					<Route path={'/books'}  element={<Pages.Books />} />
					<Route path={'/loans'} element={<Pages.Loans />} />
					<Route path={'/clients'} element={<Pages.Clients />} />
					<Route path={'*'} element={<Pages.NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}