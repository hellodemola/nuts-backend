const { getAllOrder, isOrderExist, updateOrderServices, addNewOrderServices } = require("../services/service.order")


const OrderController = async (req, res) => {
  try {
    const getAll = await getAllOrder()
    res.send({data: getAll})
  } catch (error) {
    res.status(400).send({error})
  }
}

const OrderByParticulars = async (req, res) => {
  const { email, date } = req.query

  try {
    const isOrder = await isOrderExist(email, date);
    res.send({ data: isOrder })
  } catch (error) {
    res.status(400).send({error})
  }
}

const AddNewOrder = async (req, res) => {
  const { name, email, quantity, amount = 1000, deliveryDate, orderDate = deliveryDate } = req.body

  try {
    const add = await addNewOrderServices(name, email, quantity, amount, deliveryDate, orderDate)
    if (!add) return res.status(409).send({ message: 'user already exist' })
    res.status(201).send({ data: add })
    
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