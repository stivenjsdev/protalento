export function unknownEndpoint(request, response, next) {
  response.status(404).json({ error: "unknown endpoint" });
}
