const {Router} = require('express')
const router = Router()
const { getMascotas, insertMascota, updateMascota, deleteMascota} = require("../controllers/mascota")
router.get('/', (req,res)=>{
    res.json({hola:"mundo"})
})

//CRUD Clientes
router.get("/mascotas",getMascotas) // Read, Mostrar, Leer
router.post("/mascotas",insertMascota) // Create, Crear, Insert
router.put("/mascotas/:id",updateMascota) // Update, Actualizar
router.delete("/mascotas/:id",deleteMascota) // Update, Actualizar

module.exports = router;