const Joi = require('joi');

const validateNewOrder = (req, res, next) => {
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
    quantity: Joi.number()
      .min(1)
      .required()
  })
    const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }
  next();
  ;
}




module.exports = { validateNewOrder }