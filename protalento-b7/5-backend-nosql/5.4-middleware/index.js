import express from 'express';
import cors from 'cors';
import { dbConnect } from './database/db.js';
import { router } from './routes/index.routes.js';
import { requestLogger } from './middleware/logger.js';

const server = express();
const PORT = 3000;

// MIDDLEWARES
server.use(express.json());
server.use(requestLogger);
server.use(cors());

// ROUTES
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
