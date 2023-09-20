import { User } from "../models/user.js";
import jwt from 'jsonwebtoken'

const getUsuarios = async (request, response, next) => {
    try {
      // find all documents
      const users = await User.find({});
    
      response.status(200).json(users);
    } catch (error) {
      next(error);
    }
}

const getUsuario = async (request, response, next) => {
    try {
      const id = request.params.id;
      const userFound = await User.findById(id);
    
      if (!userFound) {
        return response.status(404).end();
      }
    
      response.status(200).json(userFound);
    } catch (error) {
      next(error);
    }
}

const createUser = async (request, response, next) => {
    try {
  
      const { name, email, password } = request.body

        // MANERA 1
        // const newUser = new User(userProps);
        // await newUser.save();
        // OR...
        const userProps = {
          name, 
          email,
          password
        };

        // MANERA 2, elijan a su gusto.
        await User.create(userProps);
    
        // response.status(201).json(newUser);
        response.status(201).end();
  
    } catch (error) {
      next(error);
    }
  }

const updateUser = async (request, response, next) => {
    try {
      const id = request.params.id;
      const userNewProps = request.body;
      const updatedUser = await User.findByIdAndUpdate(id, userNewProps, {
        new: true,
      }).exec();
  
      // response.status(200).json(updatedUser);
      response.status(200).end();
    } catch (error) {
      next(error);
    }
  }

const deleteUser = async (request, response, next) => {
    try {
      const id = request.params.id;
  
      const deletedUser = await User.findByIdAndRemove(id).exec();
  
      if (!deletedUser) {
        // return response.status(404).json({ message: "user not found" });
        response.status(404).end();
      }
  
      // response.status(200).send(deletedUser);
      response.status(204).end(); /* al definir un 204 ignorará y no enviara ninguna respuesta al cliente, aunque pongamos un .json o .send*/
    } catch (error) {
      next(error);
    }
  }

  const login =  async (request, response, next) => {
    const { email, password } = request.body

    const data ={
      email, 
      password
    }

    jwt.sign(data, 'gatito123', (err, token)=>{
      if(err){
        next(err);
      }else{
        response.json({"msg":"Token creado", "token": token})
      }
    })
    
  }

export { getUsuarios, getUsuario, createUser, updateUser, deleteUser, login }