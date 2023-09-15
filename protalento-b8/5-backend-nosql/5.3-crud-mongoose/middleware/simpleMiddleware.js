const simpleMiddleware = (request, response, next) => {
    
    /* Ejemplo de Auth muy basico
    if(request.headers.token == "Perrito1234")
        next()
    else
        response.status(500).send("error")
    */
        
    next()
}

export default simpleMiddleware 