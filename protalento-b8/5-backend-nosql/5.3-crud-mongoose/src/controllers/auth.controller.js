import { User } from "../models/user.js";
import { generateToken } from "../utils/token.js";

export const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // validar que el usuario no este registrado
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res
        .status(401)
        .json({error: 'email already exist'})
    }

    const userProps = {
      name,
      email,
      password,
    };

    // MANERA 1
    const newUser = new User(userProps);
    // OR...
    
    // MANERA 2, elijan a su gusto.
    //const user = await User.create(userProps);
    
    // encriptar el password
    newUser.password = await newUser.encryptPassword(password);
    // gardar el usuario
    await newUser.save();

    // generar el JWT
    const token = generateToken(newUser);

    // response.status(201).json(newUser);
    res.status(201).json({ok: true, token});
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await User.findOne({ email });
  console.log(foundUser.id);
  console.log(foundUser);

  // validar si no existe un usuario registrado con ese email
  if (!foundUser) {
    return res.status(404).json({error: "email does not exist"})
  }

  const validPassword = await foundUser.validatePassword(password);

  if (!validPassword) {
    return res.status(401).json({
      ok: false,
      error: "Incorrect Password"
    })
  }

  const token = generateToken(foundUser);

  res.status(200).json({ok: true, token});
};
