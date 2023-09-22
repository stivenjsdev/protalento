import { Router } from "express";
import {
  createComment,
  deleteComment,
  getComment,
  getComments,
  updateComment,
} from "../controllers/comment.controller.js";
import authJWT from "../middleware/auth.js";

export const commentRouter = Router();

commentRouter.use(authJWT); // <-- uso general
commentRouter.get("/", getComments);
commentRouter.get("/:id", getComment);
commentRouter.post("/", createComment);
commentRouter.patch("/:id", updateComment);
commentRouter.delete("/:id", deleteComment);
