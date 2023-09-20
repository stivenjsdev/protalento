import { Router } from "express";
import { User } from "../models/user.js";
import simpleMiddleware from "../middleware/simpleMiddleware.js";
import upload from "../middleware/upload.js";
import { getUsuario, getUsuarios, createUser, updateUser, deleteUser, login, uploadAvatar } from "../controllers/user.controller.js";
export const userRouter = Router();

// ROUTES
// CRUD
// get all users
/* GET http://localhost:3000/api/v1/users */
userRouter.get("/", getUsuarios);

// get user by id
/* GET http://localhost:3000/api/v1/users/:id */
userRouter.get("/:id", getUsuario);

// create user
/* POST http://localhost:3000/api/v1/users */
userRouter.post("/", simpleMiddleware, createUser);
userRouter.post("/login", login);
userRouter.post("/avatar/:id", upload.single('avatar') , uploadAvatar);

// update user by id
/* PATCH http://localhost:3000/api/v1/users/:id */
/* put va a reemplazar todo el recurso, y patch va a actualizar el recurso */
userRouter.patch("/:id", simpleMiddleware, updateUser);

// delete user by id
/* DELETE http://localhost:3000/api/v1/users/:id */
userRouter.delete("/:id", deleteUser);
