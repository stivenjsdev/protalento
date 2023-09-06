import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const server = express();
const PORT = 3000;
const URL =
  "mongodb+srv://sensei:1234@cluster0.vep1mp4.mongodb.net/social?retryWrites=true&w=majority";

server.use(
  express.json()
); /* transformar el cuerpo de la peticion en un json */
server.use(
  cors()
); /* me permite recibir solicitudes de clientes fuera de mi dominio */

async function main() {
  await mongoose.connect(URL);

  // USER SCHEMA
  const userSchema = new mongoose.Schema({
    name: String, // String is shorthand for {type: String}
    email: { type: String, require: true },
    password: { type: String, require: true },
  });

  // USER MODEL
  const User = mongoose.model(
    "User",
    userSchema
  ); /* El nombre debe ser siempre en singular */

  server.listen(PORT, () => {
    console.log(`Server listen in http://localhost:${PORT}`);
  });
}

main();
