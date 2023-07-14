import axios from "axios";

async function getAllUsers() {
    const response = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users",
    });

    const usuarios = response.data;

    console.log(usuarios);
}

getAllUsers();

// Actividad
// completen todas las peticiones que hicieron en postman aca en el codigo.
