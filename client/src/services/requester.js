
const baseUrl = 'http://localhost:5000';

export const requester = async (method, url, data) => {
    const options = {
        method,
        headers: { 'Content-Type': 'application/json' }
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${baseUrl}${url}`, options);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    // if(result.ok) {
    //     throw new Error(result.error);
    // }

    return result;
}

export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const del = requester.bind(null, "DELETE");