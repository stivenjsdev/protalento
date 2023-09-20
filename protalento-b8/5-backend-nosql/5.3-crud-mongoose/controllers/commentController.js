import Comment from "../models/comment.js";

const getComments = async (request, response, next) => {
    try {
        const comments = await Comment.find().populate('auth');
        response.status(200).json(comments);
    } catch (error) {
        next(error);
    }
};

const createComment = async (request, response, next) => {
    try {
        const {title, content, auth} = request.body;
        const comment = await Comment.create({
            title,
            content,
            auth
        });

        response.status(201).json(comment);

    } catch (error) {
        next(error);
    }
}

export { getComments, createComment }