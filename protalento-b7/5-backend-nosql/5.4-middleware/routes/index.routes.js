import { Router } from 'express';
import { usersRouter } from './users.routes.js';
import { postsRouter } from './posts.routes.js';

export const router = Router();

// localhost:3000/api/info
router.get('/info', (request, response) => {
  response.json({ message: 'API up' });
});

// todo: add users and posts routes
// localhost:3000/api/users
router.use('/users', usersRouter);
router.use('/posts', postsRouter);
