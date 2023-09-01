import express from 'express';
import mongoose from 'mongoose';

const server = express();
const PORT = 3000;

server.use(express.json());
server.use(cors());

const main = async () => {
    try {

        // Conexiona a MongoDB
        await mongoose.connect('mongodb+srv://sensei:1234@cluster0.vep1mp4.mongodb.net/prueba');

        // Schema
        const clienteZapatosSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true,
            },
            lastname: {
                type: String
            }
        });
        // Model
        const ClienteZapatos = mongoose.model('ClienteZapato', clienteZapatosSchema);

        // Rutas
        server.get('api/clientes', async (req, res) => {
            try {
                const clientes = await ClienteZapatos.find();
                console.log(clientes);
                res.status(200).json(clientes);
            } catch (error) {
                console.log(error);
                res.status(500).json({ message: error.message });
            }
        })

        server.listen(PORT, () => {
            console.log(`Servidor iniciado en http://localhost:${PORT}`);
        });
        
    } catch (error) {
        console.log(error);
    }
}

main()

