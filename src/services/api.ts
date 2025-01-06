export function useFetchApi() {
	const baseUrl = import.meta.env.BASE_URL;

	async function get<T>(route: string): Promise<T> {
		const response = await fetch(`${baseUrl}${route}`);
		return await response.json();
	}

	async function post<T>(route: string, data: T) {
		const response = await fetch(`${baseUrl}${route}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		return await response.json();
	}

	async function put<T>(route: string, data: T) {
		const init = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		};
		const response = await fetch(`${baseUrl}${route}`, init);
		return await response.json();
	}

	async function remove(route: string) {
		const response = await fetch(`${baseUrl}${route}`, { method: 'DELETE' });
		return await response.json();
	}

	return { get, post, put, remove };
}
