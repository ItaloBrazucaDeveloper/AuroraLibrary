import { ServerResponseType } from '~types/server-response-type';

export function useFetchApi() {
	const baseUrl = import.meta.env.VITE_API_BASE_URL;

	/**
	 * Request a some route and return the body of response in json
	 * @param route string -> Any route of an API, example: /hamburgers
	 * @return Promise T
	 */
	async function get(route: string): Promise<ServerResponseType> {
		try {
			const response = await fetch(`http://localhost:8080${route}`);
			if (!response.ok)
				throw new Error(`HTTP error! status: ${response.status}`);
			return await response.json();
		} catch (error) {
			throw new Error(`Failed to fetch: ${error}`);
		}
	}

	/**
	 * Asynchronously sends a POST request to the specified route and returns the server response.
	 *
	 * @param route string -> Any route of an API, example: /hamburgers
	 * @param data object ->
	 * @returns ServerResponseType -> A promise that resolves to the server response.
	 */
	async function post<T>(route: string, data: T): Promise<ServerResponseType> {
		let responseServer: ServerResponseType;

		try {
			console.log(`Sending request to: ${baseUrl}${route}`);
			const response = await fetch(`${baseUrl}${route}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				responseServer = {
					error: {
						message: `HTTP error! status: ${response.status}`,
					},
				};
			} else {
				responseServer = {
					data: await response.json(),
				};
			}
		} catch (error) {
			responseServer = {
				error: {
					message: `Failed to post: ${error}`,
				},
			};
		}

		return responseServer;
	}

	async function put<T>(route: string, data: T): Promise<ServerResponseType> {
		try {
			const response = await fetch(`${baseUrl}${route}`, {
				credentials: 'include',
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			if (!response.ok)
				throw new Error(`HTTP error! status: ${response.status}`);
			return await response.json();
		} catch (error) {
			throw new Error(`Failed to put: ${error}`);
		}
	}

	/**
	 * Asynchronously sends a DELETE request to the specified route and returns the server response.
	 *
	 * @param route string -> The API route to send the DELETE request to.
	 * @returns ServerResponseType -> A promise that resolves to the server response.
	 *
	 * @example
	 *
	 * // Usage example:
	 * const response = await remove('/api/resource/id');
	 * if (response.error) {
	 * 	console.log(`Deu ruim, ${response.error.message}`);
	 * }
	 */
	async function remove(route: string): Promise<ServerResponseType> {
		try {
			const response = await fetch(`${baseUrl}${route}`, {
				method: 'DELETE',
				credentials: 'include',
			});
			if (!response.ok)
				throw new Error(`HTTP error! status: ${response.status}`);
			return await response.json();
		} catch (error) {
			throw new Error(`Failed to delete: ${error}`);
		}
	}

	return { get, post, put, remove };
}
