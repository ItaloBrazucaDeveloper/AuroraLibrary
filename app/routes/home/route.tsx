import { redirect } from 'react-router';
import { getSession } from '~app/sessions.server';
import { HomePage } from './page';

import { Route } from './+types/route';

export async function loader({ request }: Route.LoaderArgs) {
	const session = await getSession(request.headers.get('Cookie'));

	if (!session.has('token')) {
		return redirect('/');
	}
}

export default function Home() {
	return <HomePage />;
}

export async function action() {

}