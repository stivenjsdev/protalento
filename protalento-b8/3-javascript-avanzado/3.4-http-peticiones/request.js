import axios from "axios";

async function getAllUsers() {
    const response = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users",
    });

    const usuarios = response.data;

    console.log(usuarios);
}

async function createUser() {
    try {
        const response = await axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/users',
            data: {
                name: 'Stiven'
            }
        });
        console.log(response.data);
        throw new Error('hola')
        
    } catch (error) {
        console.log(error.stack);
    }
}

// getAllUsers();
createUser();

// Actividad
// completen todas las peticiones que hicieron en postman aca en el codigo.
