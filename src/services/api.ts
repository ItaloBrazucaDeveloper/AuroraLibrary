export function useFetchApi() {
  
	async function get(url: string) {
		const response = await fetch(url);
		return await response.json();
	}

	async function post(data: {}, url: string) {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		return await response.json();
	}

	async function put(url: string, data: {}) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  }

	async function remove(url: string) {
		const response = await fetch(url, { method: 'DELETE' });
    return await response.json();
	}

	return [get, post, put, remove];
}
