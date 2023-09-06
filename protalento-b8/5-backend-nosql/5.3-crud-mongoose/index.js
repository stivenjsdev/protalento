import express, { Router } from "express";
import cors from "cors";
import mongoose from "mongoose";

const server = express();
const router = Router();
const PORT = 3000;
const URL =
  "mongodb+srv://sensei:1234@cluster0.vep1mp4.mongodb.net/social?retryWrites=true&w=majority";

/* transformar el cuerpo de la peticion en un json */
server.use(express.json());
/* me permite recibir solicitudes de clientes fuera de mi dominio */
server.use(cors());

server.use("/api/v1/", router);

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

  // ROUTES
  // CRUD
  // get all users
  /* http://localhost:3000/api/v1/users */
  router.get("/users", async (request, response) => {
    // find all documents
    const users = await User.find({});

    response.status(200).json(users);
  });

  // get user by id
  router.get("/users/:id", async (request, response) => {
    const id = request.params.id;
    const userFound = await User.findById(id);

    if (!userFound) {
      return response.status(404).end();
    }

    response.status(200).json(userFound);
  });

  server.listen(PORT, () => {
    console.log(`Server listen in http://localhost:${PORT}`);
  });
}

main();
