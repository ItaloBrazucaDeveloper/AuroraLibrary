export function useFetchApi() {
	const baseUrl = import.meta.env.API_BASE_URL;

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

	async function post<T, R>(route: string, data: T): Promise<R> {
		try {
			const response = await fetch(`${baseUrl}${route}`, {
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
