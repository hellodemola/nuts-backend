var express = require('express');
const { UserController, addUserController, UserByEmail }= require('../controllers/user.controller');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', UserController)

router.post('/add', addUserController)
router.get('/get', UserByEmail)

module.exports = router;