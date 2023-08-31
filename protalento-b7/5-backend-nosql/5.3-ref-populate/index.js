import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const server = express();
const PORT = 3000;

server.use(express.json());
server.use(cors());

async function main() {
    try {
        // conectarnos a la bd
        await mongoose.connect('mongodb+srv://sensei:1234@cluster0.vep1mp4.mongodb.net/social');

        // SCHEMAS
        // User Schema
        const userSchema = new mongoose.Schema({
            name: String,
            email: String,
            // likedPosts arreglo de Posts type ObjectID
        });

        const User = mongoose.model("User", userSchema);

        // ROUTES
        server.get("/users", async (req, res) => {
            try {
                const users = await User.find();
                console.log(users);
    
                res.status(200).json(users);
            } catch (error) {
                res.status(500).json({ message: error.message })
            }
        });

        server.post("/users", async (req, res) => {
            try {
                const newUser = req.body;
                const user = new User(newUser);
                const savedUser = await user.save();

                res.status(201).json(savedUser);
            } catch (error) {
                console.log(error.message);
                res.status(500).json({ message: error.message });
            }
        });

        server.patch('/users/:id', async (req, res) => {
            const userId = req.params.id;
            const userFields = req.body;
            try {
                // buscar el usuario por el id y si lo encuentra lo va a actualizar con los campos que le pasemos
                const updatedUser = await User.findByIdAndUpdate(userId, userFields, { new: true });

                if (!updatedUser) {
                    return res.status(404).json({ message: 'User not found'});
                }

                res.status(200).json(updatedUser);
                // res.status(200).json({ message: 'User Updated correctly'});
            } catch (error) {
                console.log(error.message);
                res.status(500).json({ message: error.message });
            }
        })
    
        // levantar el servidor
        server.listen(PORT, () => {
            console.log(`Server Up in http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error: ', error.message);
    }
}

main();
