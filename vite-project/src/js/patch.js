const BASE_URL = "http://localhost:3000/";

// function updateClient(updateClientInfo, clientId) {
//     const url = `${BASE_URL}clients/${clientId}`
//     const options = {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/jason"
//         },
//         body: JSON.stringify(updateClientInfo)
//     }

//     return fetch(url, options).then(response => response.json())
// }

// updateClient({
//     name: "Valentine"
// }, 'aec0')

async function updateClient(updateClientInfo, clientId) {
  const url = `${BASE_URL}clients/${clientId}`;
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateClientInfo),
  };


  try {
        const response = await fetch(url, options);
        const updateClient = await response.json();
        return updateClient
    } catch (error) {
        console.log(error);
  } 
}

updateClient({name: 'Valentinooo'}, "aec0")