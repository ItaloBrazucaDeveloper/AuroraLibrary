import { ServerResponseType } from '~types/server-response-type';

export function useFetchApi(
	baseUrl: string = import.meta.env.VITE_API_BASE_URL
) {
	/**
	 * Request a some route and return the body of response in json
	 * @param route string -> Any route of an API, example: /hamburgers
	 * @return Promise T
	 */
	async function get<T>(
		route: string,
		token?: string,
	): Promise<ServerResponseType<T>> {
		try {
			const response = await fetch(`${baseUrl}${route}`, {
				headers: {
					Authentication: token ? `Bearer ${token}` : 'None',
				},
			});

			if (!response.ok) {
				throw new Error(`
					HTTP ERROR!
					RESPONSE_STATUS: ${response.status}`
				);
			}

			return { success: { data: await response.json() } };
		} catch (e) {
			const errorMessage = `
				FAILED TO FETCH!
				ISSUE: ${(e as Error).message}
			`;
			return { error: { title: errorMessage } };
		}
	}

	/**
	 * Asynchronously sends a POST request to the specified route and returns the server response.
	 *
	 * @param route string -> Any route of an API, example: /hamburgers
	 * @param data object ->
	 * @returns ServerResponseType -> A promise that resolves to the server response.
	 */
	async function post<T, R>(
		route: string,
		data: T,
		token?: string,
	): Promise<ServerResponseType<R>> {
		try {
			const response = await fetch(`${baseUrl}${route}`, {
				headers: {
					'Content-Type': 'application/json',
					Authentication: token ? `Bearer ${token}` : 'None',
				},
				method: 'POST',
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error(`
					HTTP_ERROR :(
					RESPONSE_STATUS: ${response.status}`
				);
			}

			return { success: { data: await response.json() } };
		} catch (e) {
			const errorMessage = `FAILED TO FETCH! ISSUE: ${(e as Error).message}`;
			return { error: { title: errorMessage } };
		}
	}

	/**
	 *
	 */
	async function put<T, R>(
		route: string,
		data: T,
		token?: string,
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
				throw new Error(`
					HTTP ERROR :(
					RESPONSE_STATUS: ${response.status}`
				);
			}

			return { success: { data: await response.json() } };
		} catch (e) {
			const errorMessage = `
				FAILED TO FETCH!
				ISSUE: ${(e as Error).message}
			`;
			return { error: { title: errorMessage } };
		}
	}

	/**
	 * Asynchronously sends a DELETE request to the specified route and returns the server response.
	 *
	 * @param route string -> The API route to send the DELETE request to.
	 * @returns ServerResponseType -> A promise that resolves to the server response.
	 */
	async function remove<T>(
		route: string,
		token?: string,
	): Promise<ServerResponseType<T>> {
		try {
			const response = await fetch(`${baseUrl}${route}`, {
				headers: {
					Authentication: token ? `Bearer ${token}` : 'None',
				},
				method: 'DELETE',
			});

			if (!response.ok) {
				throw new Error(`
					HTTP ERROR!
					RESPONSE_STATUS${response.status}`
				);
			}

			return { success: { data: await response.json() } };
		} catch (e) {
			const errorMessage = `
				FAILED TO FETCH!
				ISSUE: ${(e as Error).message}
			`;
			return { error: { title: errorMessage } };
		}
	}

	return { get, post, put, remove };
}
