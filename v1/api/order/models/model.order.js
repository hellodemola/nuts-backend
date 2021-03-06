const Order = require('./schema.order');

const addNewOrder = async (name, email, quantity, amount, deliveryDate, orderDate) => {
  try {
    const newOrder = await Order.create({
      name,
      email,
      quantity,
      amount,
      deliveryDate,
      orderDate
    })
    return newOrder
  } catch (error) {
    throw new Error(error)
  }
}

const updateOrder = async (email, amount, quantity, date) => {
  try {
   await Order.findOneAndUpdate({
     "email": email,
     "deliveryDate": date 
    },
      {
        "quantity": quantity,
        "amount": amount
      }
   )
    const getOrder = await getOrderByDate(date, email);
    return getOrder;
  } catch (error) {
    throw new Error (error)
  }
}

const getAllOrders = async () => {
  try {
    const findAll = await Order.find();
    return findAll
  } catch (error) {
    throw new Error (error)
  }
}

const getOrderByDate = async (date, email) => {
  try {
    const getOrder = await Order.find({
      "email": email,
      "deliveryDate": date
    })
    console.log(getOrder, 'order')
    if (!getOrder) return false
    return getOrder;
  } catch (error) {
    throw new Error (error)
  }
}


module.exports = { addNewOrder, updateOrder, getAllOrders, getOrderByDate }