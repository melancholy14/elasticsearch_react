import { getUid } from './cookies';

const apiUrl = 'http://localhost:8080';

async function request(url: string, options?: { method?: 'get' | 'post', headers?: Record<string, any>, data?: Record<string, any> }) {
    const { method = 'get', headers = {}, data } = options || {};

    const uid = getUid();

    const updatedHeaders = {
        'Content-Type': 'application/json',
        [uid ? 'Authorization' : '']: `Basic ${uid}`,
        ...headers
    };

    const response = await fetch(`${apiUrl}/${url}`, {
        method,
        headers: updatedHeaders,
        body: JSON.stringify(data),
    });

    const { success, error, data: result } = await response.json();

    if (success) {
        return result;
    } else {
        throw new Error(error);
    }
}

export default request;
