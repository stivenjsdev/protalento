import { User } from "../models/user.js";

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
      const userProps = request.body;
  
      // MANERA 1
      // const newUser = new User(userProps);
      // await newUser.save();
      // OR...
  
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

export { getUsuarios, getUsuario, createUser, updateUser, deleteUser }