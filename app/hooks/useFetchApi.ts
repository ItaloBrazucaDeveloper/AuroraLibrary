import { ServerResponseType } from '~types/server-response-type';

export function useFetchApi(
	baseUrl: string = import.meta.env.VITE_API_BASE_URL
) {
	async function get<T>(
		route: string,
		token = "None",
	): Promise<ServerResponseType<T>> {
		try {
			const response = await fetch(`${baseUrl}${route}`, {
				headers: {
					Authorization: token,
				},
			});

			if (!response.ok) {
				throw new Error(`HTTP ERROR! RESPONSE_STATUS: ${response.status}`);
			}

			return await response.json();
		} catch (e) {
			const errorMessage = `FAILED TO FETCH! ISSUE: ${(e as Error).message}`;
			return { error: { title: errorMessage } };
		}
	}

	async function post<T, R>(
		route: string,
		data: T,
		token = 'None',
	): Promise<ServerResponseType<R>> {
		try {
			const response = await fetch(`${baseUrl}${route}`, {
				headers: {
					'Content-Type': 'application/json',
					Authentication: token,
				},
				method: 'POST',
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error(`HTTP_ERROR :( RESPONSE_STATUS: ${response.status}`);
			}

			return await response.json();
		} catch (e) {
			const errorMessage = `FAILED TO FETCH! ISSUE: ${(e as Error).message}`;
			return { error: { title: errorMessage } };
		}
	}

	async function put<T, R>(
		route: string,
		data: T,
		token = 'None',
	): Promise<ServerResponseType<R>> {
		try {
			const response = await fetch(`${baseUrl}${route}`, {
				headers: {
					'Content-Type': 'application/json',
					Authentication: token ? `Bearer ${token}` : 'None',
				},
				method: 'PUT',
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error(`HTTP ERROR :( RESPONSE_STATUS: ${response.status}`);
			}

			return await response.json();
		} catch (e) {
			const errorMessage = `FAILED TO FETCH! ISSUE: ${(e as Error).message}`;
			return { error: { title: errorMessage } };
		}
	}

	async function remove<T>(
		route: string,
		token = 'None',
	): Promise<ServerResponseType<T>> {
		try {
			const response = await fetch(`${baseUrl}${route}`, {
				headers: {
					Authentication: token
				},
				method: 'DELETE'
			});

			if (!response.ok) {
				throw new Error(`HTTP ERROR! RESPONSE_STATUS${response.status}`);
			}

			return await response.json();
		} catch (e) {
			const errorMessage = `FAILED TO FETCH! ISSUE: ${(e as Error).message}`;
			return { error: { title: errorMessage } };
		}
	}

	return { get, post, put, remove };
}
