import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const server = express();
const PORT = 3000;

server.use(
  express.json()
); /* transformar el cuerpo de la peticion en un json */
server.use(
  cors()
); /* me permite recibir solicitudes de clientes fuera de mi dominio */

async function main() {
  await mongoose.connect("mongodb+srv://<username>:<password>@cluster0.vep1mp4.mongodb.net/");
}

server.listen(PORT, () => {
  console.log(`Server listen in http://localhost:${PORT}`);
});
