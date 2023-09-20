export function errorHandler(error, request, response, next) {
  console.log(error.name);
  if (error.name === "CastError") {
    return response.status(404).json({ error: "that is not an id" });
  }
  next();
}
