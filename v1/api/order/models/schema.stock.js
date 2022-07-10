let mongoose = require('mongoose');
require('../../../../config/db.config');

var Schema = mongoose.Schema;

const stockSchema = new Schema({
  Items: {
    quantity: Number,
    amount: Number,
  },
  date: {
    deliveryDate: Date,
    orderDate: Date
  },
  status: {
    paid: Boolean,
    delivered: Boolean,
  }
});

const Stock = mongoose.model('stock', stockSchema);

module.exports = Stock