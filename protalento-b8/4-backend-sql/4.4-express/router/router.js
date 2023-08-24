import { Router } from "express"
import { apiBody, hola, holaNombre, suma} from '../controllers/controllers.js'
import { obtenerMascotas, obtenerMascota, insertarMascota, actualizarMascota, borrarMascota} from '../controllers/mascotas.js'

const router = Router()

router.get("/hola", hola)
//router.get("/hola/:nombre",(request, response)=>{
router.get("/hola/:nombre", holaNombre)
//Suma 1 + 2 ?? 
router.post("/suma/:x/:y", suma)
router.put("/api/body", apiBody)

/*GET: Para leeer informacion*/
router.get("/mascotas",obtenerMascotas)
router.get("/mascotas/:id",obtenerMascota)
/*POST: Insertar información */
router.post("/mascotas",insertarMascota)
/*PUT: Editar informacion*/
router.put("/mascotas/:id",actualizarMascota)
/*DELETE: Borrar informacion*/
router.delete("/mascotas/:id",borrarMascota)



export default router