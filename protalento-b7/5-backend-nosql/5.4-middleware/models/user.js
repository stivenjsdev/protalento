import mongoose from 'mongoose';

// USER SCHEMA
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// USER MODEL
export const User = mongoose.model('User', userSchema);
