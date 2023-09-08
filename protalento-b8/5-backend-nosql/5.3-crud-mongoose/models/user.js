import mongoose from 'mongoose';

// USER SCHEMA
const userSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  email: { type: String, require: true },
  password: { type: String, require: true },
});

// USER MODEL
export const User = mongoose.model(
  "User",
  userSchema
); /* El nombre debe ser siempre en singular */
