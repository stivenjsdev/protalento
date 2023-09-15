import Comment from "../models/comment.js";

const createComment = async (request, response, next) => {
    try{
        const { title, content, auth } = request.body

        const comment = await Comment.create({
            title,
            content,
            auth
        })

        response.json(comment)

    } catch (error){
        next(error)
    }



    //Si tinen el mismo nombre, no es necesario repetir, ó también puedes hacerlo así:
    /*
    await Comment.create({
        title: title,
        "content": content,
        "auth": auth
    }) 
    */

    //Otra forma de ver esto, es almacenar cada valor en una variable por linea de codigo
    /*const title = request.body.title
    const content = request.body.content
    const auth = request.body.auth*/


    // console.log("Este es mi console-log", request.body)
    // response.send(`Titulo: ${title} Contenido: ${content}, Auth: ${auth}, ${stiven}`)

}

const getComments = async(request, response, next) => {
    try{
        console.log("Aqui estoy entrando al controlador")
        const comments = await Comment.find({}, "title content auth")
        .populate("auth")
        // .populate({path:"auth"})
        .exec()
        response.status(200).json(comments)
    }catch(error){
        next(error)
    }
}

const getComment = async(request, response, next) => {
    try{
        const id = request.params.id
        const comment = await Comment.findById(id).exec()
        response.status(200).json(comment)
    }catch(error){
        next(error)
    }
}

const updateComment = async(request, response, next) => {
    try{
        const id = request.params.id;
        const { title, content, auth } = request.body

        const nuevoBody = {
            "title": title,
            "content": content, 
            "auth": auth
        }

        const comment = await Comment.findByIdAndUpdate(id, nuevoBody, {new:true} ).exec()

        response.status(200).json(comment)

    }catch(error){
        next(error)
    }
}

const deleteComment =  async(request, response, next) =>{
    try{
        const id = request.params.id
        await Comment.findByIdAndRemove(id).exec()
        response.status(200).end()

    }catch(error){
        next(error)
    }
}


export { createComment, getComments, getComment, updateComment, deleteComment }