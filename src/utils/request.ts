const apiUrl = 'http://3.34.132.219';

async function request(url: string, options?: { method?: 'get' | 'post', headers?: Record<string, any>, data?: Record<string, any> }) {
    const { method = 'get', headers = {}, data } = options || {};

    const updatedHeaders = {
        'Content-Type': 'application/json',
        ...headers
    };

    const response = await fetch(`${apiUrl}/${url}`, {
        method,
        headers: updatedHeaders,
        body: JSON.stringify(data),
    });

    return response.json();
}

export default request;
