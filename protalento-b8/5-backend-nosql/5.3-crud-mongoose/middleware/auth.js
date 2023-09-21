import jwt from 'jsonwebtoken'

const authJWT = (request, response, next) => {
    const token = request.headers.authorization

    if(token == null){
        response.json({"msg":"El token no debe ir vacio"})
    }

    jwt.verify(token, 'gatito123', (err, token) => {
        if(err){
            response.status(500).json(err)
            return;
        }else{
            next()
        }
    })
}

export default authJWT