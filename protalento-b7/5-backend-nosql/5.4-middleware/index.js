import express from 'express';
import cors from 'cors';
import { dbConnect } from './database/db.js';
import { router } from './routes/index.routes.js';

const server = express();
const PORT = 3000;

// funciona para que tome los datos JSON de una solicitud, los transforme en un objeto JavaScript
// y luego los adjunte a la propiedad body del objeto request antes de llamar al controlador de ruta.
server.use(express.json());
server.use(cors());
server.use(requestLogger);

function requestLogger(request, response, next) {
  console.log('Method:', request.method);
  console.log('Path:  ', request.path);
  console.log('Body:  ', request.body);
  console.log('-----------------------');
  next();
  return undefined
}

// localhost:3000/api
server.use('/api', router);

async function main() {
  try {
    // conectarnos a la bd
    await dbConnect();

    // levantar el servidor
    server.listen(PORT, () => {
      console.log(`Server up in http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error: ', error.message);
  }
}

main();
