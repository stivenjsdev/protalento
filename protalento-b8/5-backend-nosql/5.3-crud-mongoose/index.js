import express from "express";
import cors from "cors";
import { dbConnection } from "./database/db.js";
import { userRouter } from "./routes/user.routes.js";
import { commentRouter } from "./routes/comment.routes.js";
import { logger } from "./middleware/logger.js";
import { unknownEndpoint } from "./middleware/unknownEndpoint.js";
import { errorHandler } from "./middleware/errorHandler.js";

const server = express();
const PORT = 3000;

/* transformar el cuerpo de la peticion en un json */
server.use(express.json());
/* me permite recibir solicitudes de clientes fuera de mi dominio */
server.use(cors());
server.use(logger);
server.use("/api/v1/users", userRouter);
server.use("/api/v1/comments", commentRouter);
server.use(unknownEndpoint);
// server.use(errorHandler);

async function main() {
  await dbConnection();

  server.listen(PORT, () => {
    console.log(`Server listen in http://localhost:${PORT}`);
  });
}

main();
