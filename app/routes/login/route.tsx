import { data, redirect } from 'react-router';
import { validateLogin } from '~validation/login';
import { Route } from './+types/route';

import { commitSession, getSession } from '~app/sessions.server.ts';
import { LoginPage } from './page';

export async function loader({ request }: Route.LoaderArgs) {
	const session = await getSession(request.headers.get('Cookie'));

	if (session.has('token')) {
		return redirect('/home');
	}

	return data(
		{ error: session.get('error') },
		{
			headers: {
				'Set-Cookie': await commitSession(session),
			},
		},
	);
}

export default function Login(props: Route.ComponentProps) {
	return <LoginPage {...props} />;
}

export async function action({ request }: Route.ActionArgs) {
	const session = await getSession(request.headers.get('Cookie'));
	const formData = await request.formData();

	const { token, error } = await validateLogin(formData);

	if (token) {
		session.set('token', token);

		return redirect('/home', {
			headers: {
				'Set-Cookie': await commitSession(session),
			},
		});
	}

	session.flash('error', JSON.stringify(error));

	return redirect('/', {
		headers: {
			'Set-Cookie': await commitSession(session),
		},
	});
}
