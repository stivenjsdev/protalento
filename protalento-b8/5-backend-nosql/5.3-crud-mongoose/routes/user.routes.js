import { Router } from "express";
import { User } from "../models/user.js";
export const userRouter = Router();

// ROUTES
// CRUD
// get all users
/* GET http://localhost:3000/api/v1/users */
userRouter.get("/", async (request, response) => {
  // find all documents
  const users = await User.find({});

  response.status(200).json(users);
});

// get user by id
/* GET http://localhost:3000/api/v1/users/:id */
userRouter.get("/:id", async (request, response) => {
  const id = request.params.id;
  const userFound = await User.findById(id);

  if (!userFound) {
    return response.status(404).end();
  }

  response.status(200).json(userFound);
});

// create user
/* POST http://localhost:3000/api/v1/users */
userRouter.post("/", async (request, response) => {
  try {
    const userProps = request.body;

    // MANERA 1
    // const newUser = new User(userProps);
    // await newUser.save();
    // OR...

    // MANERA 2, elijan a su gusto.
    await User.create(userProps);

    // response.status(201).json(newUser);
    response.status(201).end();
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    response.status(400).json({ error: error.message });
  }
});

// update user
/* PATCH http://localhost:3000/api/v1/users */
/* put va a reemplazar todo el recurso, y patch va a actualizar el recurso */
userRouter.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const userNewProps = request.body;
    const updatedUser = await User.findByIdAndUpdate(id, userNewProps, { new: true }).exec();

    // response.status(200).json(updatedUser);
    response.status(200).end();
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    response.status(400).json({ error: error.message });
  }
});
