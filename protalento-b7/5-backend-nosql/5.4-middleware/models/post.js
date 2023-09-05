import mongoose from 'mongoose';

// POST SCHEMA
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  auth: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}); // { versionKey: false }

// POST MODEL
export const Post = mongoose.model('Post', postSchema);
