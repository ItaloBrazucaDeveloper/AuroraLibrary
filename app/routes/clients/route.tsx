import type { ClientType } from '~types/client-type';
import { useFetchApi } from '@hooks/useFetchApi';
import { Route } from './+types/route';

import { getSession } from '~app/sessions.server';
import { redirect } from 'react-router';
import { ClientsPage } from './page';
import { validateClient } from '~validation/client';

export async function loader({ params, request }: Route.LoaderArgs) {
	const session = await getSession(request.headers.get('Cookie'));
	const token = session.get('token');

	if (!token) return redirect('/');

	const api = useFetchApi();
	const isGetById = !!params.clientId;

	if (isGetById) {
		const response = await api.get<ClientType>(`/clients/${params.clientId}`, token);
		return {
			client: response.success?.data,
			error: response.error
		}
	}

	const response = await api.get<ClientType[]>('/clients', token);
	return {
		clients: response.success?.data,
		error: response.error
	}
}

export default function Clients(props: Route.ComponentProps) {
	return <ClientsPage {...props} />;
}

export async function action({ request }: Route.ActionArgs) {
	const api = useFetchApi();
	const formData = await request.formData();
	const validate = validateClient(formData);

	if (validate.success) {
		const response = await api.post('/users', validate.success.data);

		if (response.success) {
			return;
		}
	}

	return;
}