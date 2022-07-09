const Joi = require('joi');

const validateAddUser = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .trim()
      .lowercase({ convert: true })
      .pattern(/^[^@]+@enyata\.com$/)
      .email()
      .required(),
    name: Joi.string()
      .trim()
      .lowercase({ convert: true })
      .min(3)
      .required(),
  })


  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }
  next();
  ;
}

const validateGetUser = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .trim()
      .lowercase({ convert: true })
      .email()
      .required()
  })


  const { error } = schema.validate(req.query);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }
  next();
  ;
}

module.exports = {validateAddUser, validateGetUser };