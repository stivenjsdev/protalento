import { Router } from "express";
import { User } from '../models/user.js'
export const userRouter = Router();

// ROUTES
// CRUD
// get all users
/* http://localhost:3000/api/v1/users */
userRouter.get("/", async (request, response) => {
  // find all documents
  const users = await User.find({});

  response.status(200).json(users);
});

// get user by id
/* http://localhost:3000/api/v1/users/:id */
userRouter.get("/:id", async (request, response) => {
  const id = request.params.id;
  const userFound = await User.findById(id);

  if (!userFound) {
    return response.status(404).end();
  }

  response.status(200).json(userFound);
});
