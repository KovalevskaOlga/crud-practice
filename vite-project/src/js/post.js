const BASE_URL = "http://localhost:3000/";

// function addClient(client) {
//     const url = ${BASE_URL}clients
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/jason"
//         },
//         body: JSON.stringify(client)
//     }
//     return fetch(url, options).then(response => response.json())
// }

function renderClientInfo(client) {
    return console.log(client)
}
const client = {
  name: "ksksksks",
  username: "nonono",
  email: "Tdkso@eshkere.tv2",
};

addClient(client)
  .then(renderClientInfo)
  .catch((error) => console.log(error));

// assync await

async function addClient(client) {
  const url = `${BASE_URL}clients`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/jason",
    },
    body: JSON.stringify(client),
  };
  try {
    const response = await fetch(url, options);
    const newClient = await response.json();
    return newClient;
  } catch (error) {
    console.log(error);
  }
}