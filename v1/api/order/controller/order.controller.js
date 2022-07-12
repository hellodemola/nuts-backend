const { getAllOrder, isOrderExist, updateOrderServices, addNewOrderServices } = require("../services/service.order")
const { generateDeliveryDate } = require("../../../../utils/helpers.js")


const OrderController = async (req, res) => {
  try {
    const getAll = await getAllOrder()
    res.send({data: getAll})
  } catch (error) {
    res.status(400).send({error})
  }
}

const OrderByParticulars = async (req, res) => {
  const { email } = req.query
  const { deliveryDate } = generateDeliveryDate();
  try {
    const isOrder = await isOrderExist(email, deliveryDate );
    console.log('isCOn', isOrder)
    if (isOrder.length < 1) return res.send({ message: 'No active sales for this user' })
    res.send({ data: isOrder })
  } catch (error) {
    console.log(error)
    res.status(400).send({error})
  }
}

const GetDeliveryDate = async (req, res) => {
  const { deliveryDate } = generateDeliveryDate();
  res.send({ data: { deliveryDate } })
}

const AddNewOrder = async (req, res) => {
    const { name, email, quantity } = req.body
    const { deliveryDate, orderDate } = generateDeliveryDate();
    const amount = quantity * 1000
  try {
    const add = await addNewOrderServices(name, email, quantity, amount, deliveryDate, orderDate)
    if (!add) return res.status(409).send({ message: 'user already exist' })
    res.status(201).send({ data: add })
    
  } catch (error) {
    res.status(400).send({ error })
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
  const { email, quantity } = req.body;
  const { deliveryDate } = generateDeliveryDate();
  try {
    const update = await updateOrderServices(email, deliveryDate, quantity)
   res.send({ message: 'User updated successfully', update })
    
  } catch (error) {
    res.status(400).send({error})
  }
}

module.exports = { OrderController, OrderByParticulars, AddNewOrder, CheckOrder, UpdateOrder, GetDeliveryDate }