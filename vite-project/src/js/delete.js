const BASE_URL = "http://localhost:3000/";

function deleteClient(clientId) {
    const url = `${BASE_URL}clients/${clientId}`
    const options = {
        method: "DELETE",
    }

    return fetch(url, options).then(response => response.json())
}

deleteClient('f3b3')