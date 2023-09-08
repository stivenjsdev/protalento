import mongoose from 'mongoose';

// USER SCHEMA
const userSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// USER MODEL
export const User = mongoose.model(
  "User",
  userSchema
); /* El nombre debe ser siempre en singular */
