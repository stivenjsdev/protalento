
//function hola(request,response){
const hola = (request,response)=> {
    response.json({
        hola: "mundo"
    })  
}

const holaNombre = (request, response)=>{
    const name = request.params.nombre
    response.json({
        hola: `Hola ${name}!`
    })
}

const suma = (request, response)=>{
    const x = parseInt(request.params.x)
    const y = parseInt(request.params.y)

    response.json({
        resultado: x+y 
    })
}

const apiBody = (request, response)=>{
    console.log(request.body)
    const nombre= request.body.nombre
    const ocupacion = request.body.ocupacion

    response.json({
        "mensaje": `Hola ${nombre} de ocupacion ${ocupacion}`
    })
}

export { hola , holaNombre, suma, apiBody }