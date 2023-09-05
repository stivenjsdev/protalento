import express from 'express';
import cors from 'cors';
import { dbConnect } from './database/db.js';
import { router } from './routes/index.routes.js';

const server = express();
const PORT = 3000;

// funciona para que tome los datos JSON de una solicitud, los transforme en un objeto JavaScript
// y luego los adjunte a la propiedad body del objeto request antes de llamar al controlador de ruta.
server.use(express.json());
server.use(cors());

// localhost:3000/api
server.use('/api', router);

async function main() {
  try {
    // conectarnos a la bd
    await dbConnect();

    // USER ROUTES
    server.get('/api/users', async (req, res) => {
      try {
        const users = await User.find();
        console.log(users);

        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    server.post('/api/users', async (req, res) => {
      try {
        if (!req.body.name) {
          return response.status(400).json({
            error: 'name missing',
          });
        }
        const newUser = {
          name: req.body.name,
          email: req.body.email,
        };
        const user = new User(newUser);
        const savedUser = await user.save();

        res.status(201).json(savedUser);
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
      }
    });

    server.patch('/api/users/:id', async (req, res) => {
      const userId = req.params.id;
      const userFields = req.body;
      try {
        // buscar el usuario por el id y si lo encuentra lo va a actualizar con los campos que le pasemos
        const updatedUser = await User.findByIdAndUpdate(userId, userFields, {
          new: true,
        });

        if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
        // res.status(200).json({ message: 'User Updated correctly'});
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
      }
    });

    server.delete('/api/users/:id', async (req, res) => {
      const userId = req.params.id;
      try {
        const deletedUser = await User.findByIdAndRemove(userId);

        if (!deletedUser) {
          return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(deletedUser);
      } catch (error) {
        console.log(error.message);
        if (error.message.includes('Cast to ObjectId failed for value')) {
          return res
            .status(400)
            .json({ message: 'Eso que enviaste no es un id' });
        }
        res.status(500).json({ message: error.message });
      }
    });

    // POST ROUTES
    server.get('/api/posts', async (req, res) => {
      try {
        const posts = await Post.find().populate('auth');
        console.log(posts);

        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    server.post('/api/posts', async (req, res) => {
      try {
        const newPost = req.body;
        const post = new Post(newPost);
        const savedPost = await post.save();

        res.status(201).json(savedPost);
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
      }
    });

    // update and post...

    // levantar el servidor
    server.listen(PORT, () => {
      console.log(`Server up in http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error: ', error.message);
  }
}

main();
