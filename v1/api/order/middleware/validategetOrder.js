const Joi = require('joi');

const validateGetOrder = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .trim()
      .lowercase({ convert: true })
      .email()
      .pattern(/^[^@]+@enyata\.com$/)
      .required()
  })


  const { error } = schema.validate(req.query);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }
  next();
  ;
}

module.exports = {validateGetOrder};