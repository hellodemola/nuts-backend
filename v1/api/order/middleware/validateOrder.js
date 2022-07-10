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
      .required(),
  })
}


module.exports = { validateNewOrder }