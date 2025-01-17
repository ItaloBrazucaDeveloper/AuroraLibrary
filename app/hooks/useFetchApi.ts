export function useFetchApi() {
	const baseUrl = import.meta.env.VITE_API_BASE_URL;

	/**
	 * Request a some route and return the body of response in json
	 * @param route string -> Any route of an API, example: /hamburgers
	 * @return Promise T
	 */
	async function get<T>(route: string): Promise<T> {
		try {
			const response = await fetch(`${baseUrl}${route}`);
			if (!response.ok)
				throw new Error(`HTTP error! status: ${response.status}`);
			return await response.json();
		} catch (error) {
			throw new Error(`Failed to fetch: ${error}`);
		}
	}

	/**
	 * @param route string -> Any route of an API, example: /hamburgers
	 * @param data T
	 * @return Promise R
	 */
	async function post<T, R>(route: string, data: T): Promise<R> {
		try {
			const response = await fetch(`${baseUrl}${route}`, {
				credentials: 'include',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			if (!response.ok)
				throw new Error(`HTTP error! status: ${response.status}`);
			return await response.json();
		} catch (error) {
			throw new Error(`Failed to post: ${error}`);
		}
	}

	async function put<T, R>(route: string, data: T): Promise<R> {
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

	async function remove<T>(route: string): Promise<T> {
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
