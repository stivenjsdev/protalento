import { Router } from "express";
import User from "../models/user.js";
export const userRouter = Router();

// ROUTES
// CRUD
// get all users
/* GET http://localhost:3000/api/v1/users */
userRouter.get("/", async (request, response, next) => {
  try {
    // find all documents
    const users = await User.find()
  
    if (!users) {
      return response.status(404).end();
    }

    response.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

// get user by id
/* GET http://localhost:3000/api/v1/users/:id */
userRouter.get("/:id", async (request, response, next) => {
  try {
    const id = request.params.id;
    const userFound = await User.findById(id)
  
    if (!userFound) {
      return response.status(404).end();
    }
  
    response.status(200).json(userFound);
  } catch (error) {
    next(error);
  }
});

// create user
/* POST http://localhost:3000/api/v1/users */
userRouter.post("/", async (request, response, next) => {
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
    next(error);
  }
});

// update user by id
/* PATCH http://localhost:3000/api/v1/users/:id */
/* put va a reemplazar todo el recurso, y patch va a actualizar el recurso */
userRouter.patch("/:id", async (request, response, next) => {
  try {
    const id = request.params.id;
    const userNewProps = request.body;
    const updatedUser = await User.findByIdAndUpdate(id, userNewProps, {
      new: true,
    }).exec();

    // response.status(200).json(updatedUser);
    response.status(200).end();
  } catch (error) {
    next(error);
  }
});

// delete user by id
/* DELETE http://localhost:3000/api/v1/users/:id */
userRouter.delete("/:id", async (request, response, next) => {
  try {
    const id = request.params.id;

    const deletedUser = await User.findByIdAndRemove(id).exec();

    if (!deletedUser) {
      // return response.status(404).json({ message: "user not found" });
      response.status(404).end();
    }

    // response.status(200).send(deletedUser);
    response.status(204).end(); /* al definir un 204 ignorará y no enviara ninguna respuesta al cliente, aunque pongamos un .json o .send*/
  } catch (error) {
    next(error);
  }
});
