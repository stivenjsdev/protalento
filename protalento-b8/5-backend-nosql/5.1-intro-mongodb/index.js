import express from 'express';
import mongoose from 'mongoose';

const server = express();
const PORT = 3000;

server.use(express.json());

async function main() {
    try {
        await mongoose.connect('mongodb+srv://stiven:4321@cluster0.vep1mp4.mongodb.net/');
        
        server.listen(PORT, () => {
            console.log(`Server up in http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();

