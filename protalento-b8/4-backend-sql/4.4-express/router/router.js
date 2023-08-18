import Router, { response } from "express";
const router = Router()

router.get("/",(request,response)=>{
    response.json({
        hola: "mundo"
    })  
})

//router.get("/hola/:nombre",(request, response)=>{
router.post("/hola/:nombre",(request, response)=>{
    const name = request.params.nombre
    response.json({
        hola: `Hola ${name}!`
    })
})

//Suma 1 + 2 ?? 
router.get("/suma/:x/:y",(request, response)=>{
    const x = parseInt(request.params.x)
    const y = parseInt(request.params.y)

    response.json({
        resultado: x+y 
    })
})


export default router