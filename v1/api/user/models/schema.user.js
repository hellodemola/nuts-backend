let mongoose = require('mongoose');
require('../../../../config/db.config');

var Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  name: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User