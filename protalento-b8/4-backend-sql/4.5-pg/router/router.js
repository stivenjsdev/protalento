import { Router } from "express"
import { getClientes, insertCliente, updateCliente, deleteCliente } from "../controllers/clientes.js"
const router = Router()

router.get("/clientes",getClientes)
router.post("/clientes",insertCliente)
router.put("/clientes/:id",updateCliente)
router.delete("/clientes/:id",deleteCliente)

export default router