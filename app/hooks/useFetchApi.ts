export function useFetchApi(
  baseUrl: string = import.meta.env.VITE_API_BASE_URL
) {
  function getUrl(endPoint: string) {
    if (!baseUrl) {
      throw new Error("Base url is undefined!");
    }
    console.log(`${baseUrl}${endPoint}`);
    return `${baseUrl}${endPoint}`;
  }

  async function get<T>(route: string, token?: string): Promise<T> {
    try {
      const response = await fetch(getUrl(route), {
        headers: {
          Authorization: token || "None",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ERROR! RESPONSE_STATUS: ${response.status}`);
      }

      return await response.json();
    } catch (e) {
      throw new Error(`FAILED TO FETCH! ISSUE: ${(e as Error).message}`);
    }
  }

  async function post<T, R>(
    route: string,
    data: T,
    token?: string
  ): Promise<R> {
    try {
      const response = await fetch(getUrl(route), {
        headers: {
          "Content-Type": "application/json",
          Authentication: token || "None",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP_ERROR :( RESPONSE_STATUS: ${response.status}`);
      }

      return await response.json();
    } catch (e) {
      throw new Error(`FAILED TO FETCH! ISSUE: ${(e as Error).message}`);
    }
  }

  async function put<T, R>(route: string, data: T, token?: string): Promise<R> {
    try {
      const response = await fetch(getUrl(route), {
        headers: {
          "Content-Type": "application/json",
          Authentication: token || "None",
        },
        method: "PUT",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP ERROR :( RESPONSE_STATUS: ${response.status}`);
      }

      return await response.json();
    } catch (e) {
      throw new Error(`FAILED TO FETCH! ISSUE: ${(e as Error).message}`);
    }
  }

  async function remove<T>(route: string, token?: string): Promise<T> {
    try {
      const response = await fetch(getUrl(route), {
        headers: {
          Authentication: token || "None",
        },
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP ERROR! RESPONSE_STATUS${response.status}`);
      }

      return await response.json();
    } catch (e) {
      throw new Error(`FAILED TO FETCH! ISSUE: ${(e as Error).message}`);
    }
  }

  return { get, post, put, remove };
}
