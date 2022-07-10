const { getAllOrder, isOrderExist, updateOrderServices } = require("../services/service.order")


const OrderController = async (req, res) => {
  try {
    const getAll = await getAllOrder()
    return getAll
  } catch (error) {
    res.status(400).send({error})
  }
}

const OrderByParticulars = async (req, res) => {
  const { email, date } = req.query

  try {
    const isOrder = await isOrderExist(email, date);
    return isOrder
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
    // check if email already exist
  } catch (error) {
    res.status(400).send({error})
  }
}

const UpdateOrder = async (req, res) => {
  const { email, date, quantity } = req.body
  try {
    const update = await updateOrderServices(email, date, quantity)
    return update
    
  } catch (error) {
    res.status(400).send({error})
  }
}

module.exports = { OrderController, OrderByParticulars, AddNewOrder, CheckOrder, UpdateOrder }