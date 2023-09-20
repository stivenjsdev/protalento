export function errorHandler(error, request, response, next) {
  console.log(error);
  if (error.name === "CastError") {
    return response.status(404).json({ error: "that is not an id" });
  } 
  if (error.name == "ReferenceError"){
    return response.status(404).json({ error: "reference error" });
  }
  
  next();
}
