import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

// USER SCHEMA
const userSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: false }
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
})

userSchema.methods.encryptPassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  return hash;
}

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password) // retorna true o false
}

// USER MODEL
export const User = mongoose.model(
  "User",
  userSchema
); /* El nombre debe ser siempre en singular */
