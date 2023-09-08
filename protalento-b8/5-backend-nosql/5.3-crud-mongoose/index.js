import express from "express";
import cors from "cors";
import { dbConnection } from "./database/db.js";
import { userRouter } from "./routes/user.routes.js";

const server = express();
const PORT = 3000;

// MIDDLEWARE
function logger(request, response, next) {
  console.log('Method:', request.method);
  console.log('Path:  ', request.path);
  console.log('Body:  ', request.body);
  console.log('----------------------');
  next();
}

/* transformar el cuerpo de la peticion en un json */
server.use(express.json());
/* me permite recibir solicitudes de clientes fuera de mi dominio */
server.use(cors());

server.use(logger);

server.use("/api/v1/users", userRouter);

async function main() {
  await dbConnection();

  server.listen(PORT, () => {
    console.log(`Server listen in http://localhost:${PORT}`);
  });
}

main();
