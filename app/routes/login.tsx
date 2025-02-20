import { data, redirect } from 'react-router';
import { validateLogin } from '~validators/login';
import { Route } from './+types/login';

import { commitSession, getSession } from '~app/sessions.server';
import { LoginPage } from '../pages/login';

export async function loader({ request }: Route.LoaderArgs) {
	const session = await getSession(request.headers.get('Cookie'));

	if (session.has('token')) {
		return redirect('/books');
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

	const validate = await validateLogin(formData);

	if (validate?.token) {
		session.set('token', validate?.token);

		return redirect('/home', {
			headers: {
				'Set-Cookie': await commitSession(session),
			},
		});
	}

	session.flash('error', JSON.stringify(validate?.error));

	return redirect('/', {
		headers: {
			'Set-Cookie': await commitSession(session),
		},
	});
}
