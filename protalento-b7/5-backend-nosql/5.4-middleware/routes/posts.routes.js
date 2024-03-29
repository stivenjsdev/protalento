import { Router } from 'express';
import { Post } from '../models/post.js';

export const postsRouter = Router();

// POST ROUTES
postsRouter.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('auth');
    console.log(posts);

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

postsRouter.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const posts = await Post.find({ _id: id }).populate('auth');

    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
});

postsRouter.post('/', async (req, res) => {
  try {
    const newPost = req.body;
    const post = new Post(newPost);
    const savedPost = await post.save();

    // res.status(201).json(savedPost);
    res.status(201).end();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// update and post...
