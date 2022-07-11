let mongoose = require('mongoose');
require('../../../../config/db.config');

var Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: String,
  email: String,
  quantity: Number,
  amount: Number,
  deliveryDate: Date,
  orderDate: Date,
  status: {
    paid: Boolean,
    delivered: Boolean,
    order: String
  }
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order