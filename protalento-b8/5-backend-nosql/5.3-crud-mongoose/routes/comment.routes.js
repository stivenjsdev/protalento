import { Router } from "express";
import Comment from "../models/comment.js";
import { createComment, getComments } from "../controllers/comment.controller.js"
export const commentRouter = Router();

commentRouter.get("/", getComments)
commentRouter.post("/", createComment)
