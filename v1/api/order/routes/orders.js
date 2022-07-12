var express = require('express');
const { OrderController, AddNewOrder, CheckOrder, UpdateOrder, OrderByParticulars, GetDeliveryDate } = require('../controller/order.controller');
const { validateGetOrder } = require('../middleware/validategetOrder');
const { validateNewOrder } = require('../middleware/validateOrder');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource 8');
});
router.get('/all', validateNewOrder, OrderController)
router.get('/active', validateGetOrder, OrderByParticulars)
router.get('/get', CheckOrder)
router.get('/delivery-date', GetDeliveryDate)

/*  POST REQUESTS */
router.post('/add', validateNewOrder, AddNewOrder)

/* PATCH REQUESTS */
router.patch('/update', validateNewOrder, UpdateOrder)

module.exports = router;
