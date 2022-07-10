

const OrderController = async (req, res) => {
  try {
    // get all order
  } catch (error) {
    res.status(400).send({error})
  }
}

const OrderByParticulars = async (req, res) => {
  const { email, date } = req.query
  // get order by email and deliveryDate
  try {
    
  } catch (error) {
    res.status(400).send({error})
  }
}

const AddNewOrder = async (req, res) => {
  try {
    // find if order already exist
    // add new order
    
  } catch (error) {
    res.status(400).send({error})
  }
}

const CheckOrder = async (req, res, next) => {
  try {
    
  } catch (error) {
    res.status(400).send({error})
  }
}

const UpdateOrder = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(400).send({error})
  }
}

module.exports = { OrderController, OrderByParticulars, AddNewOrder, CheckOrder, UpdateOrder }