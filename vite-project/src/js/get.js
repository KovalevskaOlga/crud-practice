const BASE_URL = "http://localhost:3000";

// function fetchUsers() {
//   return fetch(`${BASE_URL}/clients`).then(response => response.json()).then(data => console.log(data))
// }

// function fetchUsers(userId) {
//   return fetch(`${BASE_URL}/clients/${userId}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// fetchUsers()
// fetchUsers(5);

async function fetchUsers(userId) {
  try {
    const response = await fetch(`${BASE_URL}/clients/${userId}`);
    const client = await response.json();
    return client;
  } catch (error) {
    console.log(error)
  }
}

fetchUsers(6)