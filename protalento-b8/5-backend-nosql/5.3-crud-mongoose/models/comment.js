import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
    title: String, 
    content: String, 
    auth: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
}, { strict: true })

const Comment = mongoose.model("Comment", commentSchema)

export default Comment