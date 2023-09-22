export function errorHandler(error, request, response, next) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
  if (error.name === "CastError") {
    return response.status(404).json({ error: "that is not an id" });
  } 
  if (error.name === "ReferenceError") {
    return response.status(404).json({ error: "reference error" });
  }
  if (error.name === "TokenExpiredError") {
    return response.status(401).json({ error: "token expired" });
  }
  
  next();
}
