import { Router } from "express";
import Comment from "../models/comment.js";
import simpleMiddleWare from '../middleware/simpleMiddleware.js'
import { createComment, getComments, getComment, updateComment, deleteComment } from "../controllers/comment.controller.js"
export const commentRouter = Router();

commentRouter.use(simpleMiddleWare)
commentRouter.get("/", getComments)
commentRouter.get("/:id", getComment)
commentRouter.post("/", createComment)
commentRouter.patch("/:id", updateComment)
commentRouter.delete("/:id", deleteComment)
