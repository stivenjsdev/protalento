import { Router } from 'express';

export const router = Router();

// localhost:3000/api/info
router.get('/info', (request, response) => {
  response.json({ message: 'API up' });
});
