import { Router } from "express";
import { createUser, deleteUser, getUsuario, getUsuarios, login, updateUser, uploadAvatar } from "../controllers/user.controller.js";
import upload from "../middleware/upload.js";
import { validator } from "../middleware/validator.js";
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
userRouter.post("/", validator, createUser);
userRouter.post("/login", login);
userRouter.post("/avatar/:id", upload.single('avatar') , uploadAvatar);

// update user by id
/* PATCH http://localhost:3000/api/v1/users/:id */
/* put va a reemplazar todo el recurso, y patch va a actualizar el recurso */
userRouter.patch("/:id", validator, updateUser);

// delete user by id
/* DELETE http://localhost:3000/api/v1/users/:id */
userRouter.delete("/:id", deleteUser);
