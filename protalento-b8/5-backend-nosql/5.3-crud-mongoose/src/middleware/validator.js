import Joi from "joi";

export const validator = (request, response, next) => {
  const { name, email, password } = request.body;

  const schema = Joi.object({
    name: Joi.string().min(4).max(10),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(
      new RegExp(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/
      )
    ),
  });

  const value = schema.validate({
    name: name,
    email: email,
    password: password,
  });

  if (value.error) {
    response.status(500).json(value.error);
  } else {
    next();
  }
};
