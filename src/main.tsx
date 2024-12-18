import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Nav } from './components/nav';
import * as Pages from './routes';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className="flex flex-col md:flex-row gap-3 bg-zinc-100 h-svh p-2">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route index element={<Pages.Home />} />
					<Route path={'/books'} element={<Pages.Books />} />
					<Route path={'/loans'} element={<Pages.Loans />} />
					<Route path={'/clients'} element={<Pages.Clients />} />
				</Routes>
			</BrowserRouter>
		</div>
	</StrictMode>,
);
