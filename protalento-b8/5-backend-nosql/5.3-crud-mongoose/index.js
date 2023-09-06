import express from 'express';
import cors from 'cors';

const server = express();
const PORT = 3000;

server.use(express.json()); /* transformar el cuerpo de la peticion en un json */
server.use(cors()); /* me permite recibir solicitudes de clientes fuera de mi dominio */

server.listen(PORT, () => {
    console.log(`Server run in http://localhost:${PORT}`);
});


