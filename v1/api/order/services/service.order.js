const { getOrderByDate, getAllOrders, updateOrder, addNewOrder } = require("../models/model.order")

const isOrderExist = async (email, date) => {
  try {
    const getOrder = await getOrderByDate(date, email)
    if (!getOrder) return false
    return getOrder;
  } catch (error) {
    throw new Error (error)
  }
}

const addNewOrderServices = async (name, email, quantity, amount, deliveryDate, orderDate) => {
  try {
    const checkActiveStatus = await isOrderExist(email, deliveryDate)
    console.log(checkActiveStatus, 'starus')
    if (checkActiveStatus.length > 0) return false
    const add = await addNewOrder(name, email, quantity, amount, deliveryDate, orderDate)
    return add
  } catch (error) {
    throw new Error (error)
  }
}

const getAllOrder = async () => {
   try {
     const getAll = await getAllOrders();
     return getAll;
  } catch (error) {
    throw new Error (error)
  }
}

const updateOrderServices = async (email, date, quantity) => {
  try {
    const isActiveStatus = await isOrderExist(email, date)
    if ( !isActiveStatus ) return false
    const update = await updateOrder(email, quantity)
    return update
  } catch (error) {
    throw new Error (error)
  }
}

module.exports = { isOrderExist, addNewOrderServices, getAllOrder, updateOrderServices }