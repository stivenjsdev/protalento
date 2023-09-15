const simpleMiddleware = (request, response, next) => {
    console.log("Aqui estoy entrando al middleware ")
    next()
}

export default simpleMiddleware 