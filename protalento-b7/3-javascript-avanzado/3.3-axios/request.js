import axios from "axios";

async function request() {
    const response = await axios({
        method: "delete",
        url: "https://jsonplaceholder.typicode.com/users/4"
    });

    // console.log(response);
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
}

request();

// HOMEWORK
// crear funciones que realicen las consultas con cada uno de los methods http de la api jsonplaceholder

async function getAllUsers() {
    const response = await axios({
        method: "delete",
        url: "https://jsonplaceholder.typicode.com/users"
    });

    const users = response.data;

    return users;
}
