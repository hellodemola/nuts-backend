var express = require('express');
const { OrderController, AddNewOrder, CheckOrder, UpdateOrder } = require('../controller/order.controller');
const { validateNewOrder } = require('../middleware/validateOrder');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource 8');
});

router.get('/all', OrderController)

router.post('/add', validateNewOrder, AddNewOrder)
router.get('/get', CheckOrder)
router.patch('/update-order', UpdateOrder)

module.exports = router;
