export const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError') {
    return response.status(404).json({ error: 'malformatted id' });
  }

  next(error);
};
