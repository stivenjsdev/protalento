import { Router } from "express";
import Comment from "../models/comment.js";
import { getComments, createComment } from "../controllers/commentController.js"
const commentRouter = Router();

commentRouter.get("/", getComments)
commentRouter.post("/", createComment)


export { commentRouter }